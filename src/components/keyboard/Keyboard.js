import { useEffect } from 'react';

import './Keyboard.scss';

const Keyboard = (props) => {
    const {keyBoardValue} = props;

    console.log(typeof keyBoardValue);
    // обработчик клавиш на клавиатуре
    useEffect(() => {
        if (keyBoardValue) {
            console.log('entry');
            console.log(keyBoardValue);
            // const keyBoardAll = document.querySelectorAll('[data-keyboardvalue]');
            // console.log("keyBoardAll", keyBoardAll);
            const dataKeyBoard = document.querySelector(`[data-keyboardvalue=${keyBoardValue}]`);
            console.log(dataKeyBoard);
            if (dataKeyBoard) {
                dataKeyBoard.classList.add('press');
                setTimeout(() => {
                    dataKeyBoard.classList.remove('press');
                }, 1000);
            }
        }
    }, [keyBoardValue]);

    return (
        <div className="main__content">
            <div className="main__content__keyboard">
                <ul id="keyboard">
                    <li className="symbol"><span data-keyboardvalue="Backquote" className="off">`</span><span className="on">~</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit1" className="off">1</span><span className="on">!</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit2" className="off">2</span><span className="on">@</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit3" className="off">3</span><span className="on">#</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit4" className="off">4</span><span className="on">$</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit5" className="off">5</span><span className="on">%</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit6" className="off">6</span><span className="on">^</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit7" className="off">7</span><span className="on">&amp;</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit8" className="off">8</span><span className="on">*</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit9" className="off">9</span><span className="on">(</span></li>
                    <li className="symbol"><span data-keyboardvalue="Digit0" className="off">0</span><span className="on">)</span></li>
                    <li className="symbol"><span data-keyboardvalue="Minus" className="off">-</span><span className="on">_</span></li>
                    <li className="symbol"><span data-keyboardvalue="Equal" className="off">=</span><span className="on">+</span></li>
                    <li className="delete lastitem" data-keyboardvalue="Delete">delete</li>
                    <li className="tab" data-keyboardvalue="tab">tab</li>
                    <li className="letter" data-keyboardvalue="KeyQ">q</li>
                    <li className="letter" data-keyboardvalue="KeyW">w</li>
                    <li className="letter" data-keyboardvalue="KeyE">e</li>
                    <li className="letter" data-keyboardvalue="KeyR">r</li>
                    <li className="letter" data-keyboardvalue="KeyT">t</li>
                    <li className="letter" data-keyboardvalue="KeyY">y</li>
                    <li className="letter" data-keyboardvalue="KeyU">u</li>
                    <li className="letter" data-keyboardvalue="KeyI">i</li>
                    <li className="letter" data-keyboardvalue="KeyO">o</li>
                    <li className="letter" data-keyboardvalue="KeyP">p</li>
                    <li className="symbol"><span data-keyboardvalue="[" className="off">{"["}</span><span data-keyboardvalue="{" className="on">{"{"}</span></li>
                    <li className="symbol"><span data-keyboardvalue="]" className="off">{"]"}</span><span data-keyboardvalue="}" className="on">{"}"}</span></li>
                    <li className="symbol lastitem"><span data-keyboardvalue="\\/" className="off">\</span><span data-keyboardvalue="=" className="on">|</span></li>
                    <li className="capslock" data-keyboardvalue="caps" >caps lock</li>
                    <li className="letter" data-keyboardvalue="KeyA">a</li>
                    <li className="letter" data-keyboardvalue="KeyS">s</li>
                    <li className="letter" data-keyboardvalue="KeyD">d</li>
                    <li className="letter" data-keyboardvalue="KeyF">f</li>
                    <li className="letter" data-keyboardvalue="KeyG">g</li>
                    <li className="letter" data-keyboardvalue="KeyH">h</li>
                    <li className="letter" data-keyboardvalue="KeyJ">j</li>
                    <li className="letter" data-keyboardvalue="KeyK">k</li>
                    <li className="letter" data-keyboardvalue="KeyL">l</li>
                    <li className="symbol"><span className="off">;</span><span data-keyboardvalue=":" className="on">:</span></li>
                    <li className="symbol"><span className="off">'</span><span data-keyboardvalue="" className="on">&quot;</span></li>
                    <li className="return lastitem" data-keyboardvalue="return" >return</li>
                    <li className="left-shift" data-keyboardvalue="shift" >shift</li>
                    <li className="letter" data-keyboardvalue="KeyZ">z</li>
                    <li className="letter" data-keyboardvalue="KeyX">x</li>
                    <li className="letter" data-keyboardvalue="KeyC">c</li>
                    <li className="letter" data-keyboardvalue="KeyV">v</li>
                    <li className="letter" data-keyboardvalue="KeyB">b</li>
                    <li className="letter" data-keyboardvalue="KeyN">n</li>
                    <li className="letter" data-keyboardvalue="KeyM">m</li>
                    <li className="symbol"><span className="off" data-keyboardvalue="Comma">,</span><span className="on" data-keyboardvalue="=" >&lt;</span></li>
                    <li className="symbol"><span className="off" data-keyboardvalue="Period">.</span><span className="on" data-keyboardvalue="=" >&gt;</span></li>
                    <li className="symbol"><span className="off">/</span><span className="on" data-keyboardvalue="?" >?</span></li>
                    <li className="right-shift lastitem" data-keyboardvalue="shift" >shift</li>
                    <li className="space lastitem" data-keyboardvalue="=" >&nbsp;</li>
                </ul>
            </div>
        </div>
    )
};

export default Keyboard;