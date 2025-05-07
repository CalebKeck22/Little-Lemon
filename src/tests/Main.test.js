import { fetchAPI } from "../API";

jest.mock("../API", () => ({
    fetchAPI: jest.fn((date) => {
        const result = [];
        const seed = new Date(date).getDate();

        for (let i = 17; i <= 23; i++) {
            if (seed % (i + 1) < 2) {
                result.push(`${i}:00`);
            }
            if (seed % (i + 2) < 2) {
                result.push(`${i}:30`);
            }
        }
        return result;
    }),
}));

describe("Reducer Functions", () => {
    const initializeTimes = () => fetchAPI(new Date("2025-01-01"));

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                return fetchAPI(action.date);
            default:
                return state;
        }
    };

    it("initializeTimes calls fetchAPI and returns available times", () => {
        const expectedTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
        expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-01-01"));
    });

    it("updateTimes calls fetchAPI with the provided date and returns available times", () => {
        const initialState = [];
        const action = { type: "UPDATE_TIMES", date: new Date("2025-01-01") };
        const expectedTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
        const result = updateTimes(initialState, action);
        expect(result).toEqual(expectedTimes);
        expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-01-01"));
    });
});