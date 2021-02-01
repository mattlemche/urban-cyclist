import React from 'react';
import './Footer.scss';

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="contact">
                <a href="https://mattlemche.com/" className="link link--footer">
                Designed and developed by: Matt Lemche
                </a>
                <a href="https://www.reddit.com/r/torontobiking/comments/bjvxlz/dear_urban_cyclist/" className="link link--footer">
                    Based on original Reddit post by Sleddog_Afterburn
                </a>
            </div>
        </footer>
    );
};