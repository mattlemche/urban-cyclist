import React from 'react';
import './Panel.scss';
import data from '../../data';

export default function Panel(props) {
    return (
        <main className="main">
            {data.map(rule => {
                return (
                    <div className="panel">
                        <div className="panel__content">
                            <h3 className="panel__title">
                                {rule.title}
                            </h3>
                            <p className="panel__body">
                                {rule.body}
                            </p>
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