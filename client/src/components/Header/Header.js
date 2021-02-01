import React from 'react';
import './Header.scss';

export default function Header(props) {
    return (
        <header className="header">
            <h1 className="header__title">
                <span className="header__super">
                Dear
                </span>
                Urban cyclists
            </h1>
            <div className="title-box">
            <h2 className="header__sub-title">
             A tough-love letter to fellow cyclists in Toronto.
             </h2>
            </div>            
        </header>
    );
};