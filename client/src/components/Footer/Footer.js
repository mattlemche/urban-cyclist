import React from 'react';
import './Footer.scss';

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__resources">
                <h3 className="footer__title">
                    Cycling Resources
                </h3>
                <a href="https://www.toronto.ca/services-payments/streets-parking-transportation/cycling-in-toronto/" className="link link--footer">
                    Cycling Resources Toronto
                </a>
                <a href="http://www.mto.gov.on.ca/english/safety/bicycle-safety.shtml" className="link link--footer">
                    Bicycle Safety Ontario
                </a>
            </div>
            <div className="footer__contact">
            <h3 className="footer__title">
                    About the Site
                </h3>              
                <a href="https://design.mattlemche.com/" className="link link--footer">
                Designed and developed by: Matt Lemche
                </a>
                <a href="https://www.reddit.com/r/torontobiking/comments/bjvxlz/dear_urban_cyclist/" className="link link--footer">
                    Based on original Reddit post by Sleddog_Afterburn
                </a>
                
            </div>
        </footer>
    );
};