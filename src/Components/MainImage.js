import React from 'react';
import mainLogo from '../main-logo.png';

export function MainImage() {
    return (
        <>
            <img src={mainLogo} alt="Main Logo for Little Lemon" className="main-image" />
        </>
    );
}