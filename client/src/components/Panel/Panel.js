import React from 'react';
import './Panel.scss';
import data from '../../data';

export default function Panel() {

    return (
        <main className="main">
            {data.map(rule => {
                return (
                    <div className="panel">
                        <div className="panel__content">
                            <div className="panel__copy">
                                <h3 className="panel__title">
                                    {rule.title}
                                    <span className="panel__title-two">
                                        {rule.optionalSpan}
                                    </span>
                                </h3>
                                <p className="panel__body">
                                    {rule.body}
                                </p>
                            </div>
                            
                            <div className="panel__image">
                                <img 
                                src={rule.imageUrl} 
                                alt={rule.alt} 
                                className="image"/>
                            </div>
                        </div>
                    </div>
                    
                    
                )
            })}
        </main>
    );
};