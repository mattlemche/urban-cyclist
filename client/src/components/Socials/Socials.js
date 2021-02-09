import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
    EmailShareButton,
  } from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon,
    EmailIcon,
  } from 'react-share';

function Socials(props) {
    const headline = "A tough-love letter to fellow city cyclists";
    const description = "Riding bikes is awesome, it's the best way to get around and I love it so much. I commute by bike something like 2000km a year, all year round, right across our fair city and I've seen it all. Countless crazy u-turns from cabs, pedestrians with their heads in their phone waltzing into the street, and all sort of other careless behaviour. But this letter is to my fellow cyclists, as we could all, myself included, lift our game.";
    const hashtags = ["DearUrbanCyclist", "cycling", "rules", "bikes"];
    const siteURL = "https://dearurbancyclist.com/"
    // const image = "";

    return (
        <div className="panel">
            <div className="panel__content panel__content--small">
                <h3 className="panel__title-three">If you wanna:</h3>
                <div className="panel__socials">
                    <FacebookShareButton 
                    url={siteURL}
                    quote={headline}
                    hashtag={`#${hashtags[0]}`}>
                    <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton 
                    url={siteURL}
                    title={headline}
                    hashtags={hashtags}>
                    <TwitterIcon size={32} round={true}/>
                    </TwitterShareButton>
                    <RedditShareButton 
                    url={siteURL}
                    title={headline}>
                    <RedditIcon size={32} round={true}/>
                    </RedditShareButton>
                    <LinkedinShareButton 
                    url={siteURL}
                    title={headline}
                    description={description}>
                    <LinkedinIcon size={32} round={true}/>
                    </LinkedinShareButton>
                    <EmailShareButton 
                    url={siteURL}
                    subject={headline}
                    body={description}>
                    <EmailIcon size={32} round={true}/>
                    </EmailShareButton>
                    
                </div>
                
            </div>
            
        </div>
    );
}

export default Socials;