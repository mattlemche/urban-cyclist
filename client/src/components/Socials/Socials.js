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
    const headline = "A tough-love letter to fellow cyclists in Toronto";
    const description = "Riding bikes is awesome, it's the best way to get around and I love it so much. I commute by bike something like 2000km a year, all year round, right across our fair city and I've seen it all. Countless crazy u-turns from cabs, pedestrians with their heads in their phone waltzing into the street, and all sort of other careless behaviour. But this letter is to my fellow cyclists, as we could all, myself included, lift our game.";
    const hashtags = ["DearUrbanCyclist", "bikes", "Toronto"];
    // const image = "";

    return (
        <div className="panel">
            <div className="panel__content panel__content--small">
                <h3 className="panel__title-three">If you wanna:</h3>
                <div className="panel__socials">
                    <FacebookShareButton 
                    url="https://goofy-benz-7de4d0.netlify.app/"
                    quote={headline}
                    hashtag={`#${hashtags[0]}`}>
                    <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton 
                    url="https://goofy-benz-7de4d0.netlify.app/"
                    title={headline}
                    hashtags={hashtags}>
                    <TwitterIcon size={32} round={true}/>
                    </TwitterShareButton>
                    <RedditShareButton 
                    url="https://goofy-benz-7de4d0.netlify.app/"
                    title={headline}>
                    <RedditIcon size={32} round={true}/>
                    </RedditShareButton>
                    <LinkedinShareButton 
                    url="https://goofy-benz-7de4d0.netlify.app/"
                    title={headline}
                    description={description}>
                    <LinkedinIcon size={32} round={true}/>
                    </LinkedinShareButton>
                    <EmailShareButton 
                    url="https://goofy-benz-7de4d0.netlify.app/"
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