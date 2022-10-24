import { useState, useEffect } from 'react';

import './Welcome.scss';

function randomDigit(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

const Welcome = ({onPressEnter}) => {
    const [currentColor, setCurrentColor] = useState(null);

    const rainbow = [
        "#ff0000",
        "#ffa500",
        "#ffff00",
        "#008000",
        "#0000ff",
        "#4b0082",
        "#ee82ee",
    ];

    setTimeout(() => {
        let digit = randomDigit(0, rainbow.length - 1);
        setCurrentColor(rainbow[digit]);
    }, 2000);

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            console.log(e.code);
            if (e.code === "Enter") {
                onPressEnter();
            }
        });
    }, []);

    return (
        <div className='window_welcome'>
            <div className='wrapper_welcome'>
                <div className='content_welcome'>
                    <div className='welcome_welcome'>
                        Добро пожаловать в игру: <span className='rainbow_welcome' style={{color: `${currentColor}`}}>Тренажёр скорости печати</span>
                    </div>
                    <div className='click_welcome'>
                        Кликните enter, чтобы начать...
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Welcome;