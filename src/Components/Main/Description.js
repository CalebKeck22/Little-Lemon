import { ReserveTable } from "./ReserveTable";

export function Description() {
    return (
        <>
            <div className="main-description">
                <h2>
                    Little Lemon
                </h2>
                <h3> Columbus, Ohio</h3>
                <p>
                    Discover the perfect blend of refreshing drinks and delightful treats at Little Lemon.
                    From our signature fresh lemonade to indulgent cookies and our award-winning banana
                    cream pie, every bite and sip is crafted to brighten your day. Join us for a taste
                    of happiness in the heart of Columbus!
                </p>
                <ReserveTable />
            </div>
        </>
    )
}