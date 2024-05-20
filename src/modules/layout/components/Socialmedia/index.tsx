import React from 'react';
import { socialmediaData } from '../../../../../data/socialmedia';

export default function Socialmedia() {
    return (
        <React.Fragment>
            {socialmediaData.Socialmedia.map((socialmedia, index) => (
                <a key={index} href={socialmedia.link} target="_blank">
                    {socialmedia.icon}
                </a>
            ))}
        </React.Fragment>
         );
    }