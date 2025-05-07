import React from 'react';
import mainLogo from '../../assets/images/main-logo.png';
import '../../assets/styles/Main.css'

export function MainImage() {
    return (
        <>
            <img src={mainLogo} alt="Main Logo for Little Lemon" className="main-image" />
        </>
    );
}