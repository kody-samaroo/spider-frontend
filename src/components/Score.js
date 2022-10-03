import React, { useState, useEffect } from 'react';
import { ScoreStyles } from '../styles/ScoreStyles';

const Score = () => {

    const [time, setTime] = useState(0);

    // useEffect(() => {
    //     let interval = null;
    //     interval = setInterval(() => {
    //         setTime((time) => time + 10);
    //       }, 10);
    // }, []);

    return (
        <ScoreStyles>
            <div className="Score">
                <p> 999 </p>
                <p> {("0" + Math.floor((time / 60000) % 60)).slice(-2)+":"+("0" + Math.floor((time / 2000) % 60)).slice(-2)} </p>
            </div>
        </ScoreStyles>
    );
}

export default Score;