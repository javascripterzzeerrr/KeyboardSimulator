import './Keyboard.scss';


const Keyboard = () => {
    // обработчик клавиш на клавиатуре
    const handlerKeybords = () => {
        
    };

    return (
        <div class="main__content">
            <div className="main__content__keyboard">
                <ul id="keyboard">
                    <li class="symbol"><span data-keyboardvalue="`" class="off">`</span><span class="on">~</span></li>
                    <li class="symbol"><span data-keyboardvalue="1" class="off">1</span><span class="on">!</span></li>
                    <li class="symbol"><span data-keyboardvalue="2" class="off">2</span><span class="on">@</span></li>
                    <li class="symbol"><span data-keyboardvalue="3" class="off">3</span><span class="on">#</span></li>
                    <li class="symbol"><span data-keyboardvalue="4" class="off">4</span><span class="on">$</span></li>
                    <li class="symbol"><span data-keyboardvalue="5" class="off">5</span><span class="on">%</span></li>
                    <li class="symbol"><span data-keyboardvalue="6" class="off">6</span><span class="on">^</span></li>
                    <li class="symbol"><span data-keyboardvalue="7" class="off">7</span><span class="on">&amp;</span></li>
                    <li class="symbol"><span data-keyboardvalue="8" class="off">8</span><span class="on">*</span></li>
                    <li class="symbol"><span data-keyboardvalue="9" class="off">9</span><span class="on">(</span></li>
                    <li class="symbol"><span data-keyboardvalue="0" class="off">0</span><span class="on">)</span></li>
                    <li class="symbol"><span data-keyboardvalue="-" class="off">-</span><span class="on">_</span></li>
                    <li class="symbol"><span data-keyboardvalue="=" class="off">=</span><span class="on">+</span></li>
                    <li class="delete lastitem" data-keyboardvalue="=">delete</li>
                    <li class="tab" data-keyboardvalue="tab">tab</li>
                    <li class="letter" data-keyboardvalue="q">q</li>
                    <li class="letter" data-keyboardvalue="w">w</li>
                    <li class="letter" data-keyboardvalue="e">e</li>
                    <li class="letter" data-keyboardvalue="r">r</li>
                    <li class="letter" data-keyboardvalue="t">t</li>
                    <li class="letter" data-keyboardvalue="y">y</li>
                    <li class="letter" data-keyboardvalue="u">u</li>
                    <li class="letter" data-keyboardvalue="i">i</li>
                    <li class="letter" data-keyboardvalue="o">o</li>
                    <li class="letter" data-keyboardvalue="p">p</li>
                    <li class="symbol"><span data-keyboardvalue="[" class="off">{"["}</span><span data-keyboardvalue="{" class="on">{"{"}</span></li>
                    <li class="symbol"><span data-keyboardvalue="]" class="off">{"]"}</span><span data-keyboardvalue="}" class="on">{"}"}</span></li>
                    <li class="symbol lastitem"><span data-keyboardvalue="\\/" class="off">\</span><span data-keyboardvalue="=" class="on">|</span></li>
                    <li class="capslock" data-keyboardvalue="caps" >caps lock</li>
                    <li class="letter" data-keyboardvalue="a" >a</li>
                    <li class="letter" data-keyboardvalue="s" >s</li>
                    <li class="letter" data-keyboardvalue="d" >d</li>
                    <li class="letter" data-keyboardvalue="f" >f</li>
                    <li class="letter" data-keyboardvalue="g" >g</li>
                    <li class="letter" data-keyboardvalue="h" >h</li>
                    <li class="letter" data-keyboardvalue="j" >j</li>
                    <li class="letter" data-keyboardvalue="k" >k</li>
                    <li class="letter" data-keyboardvalue="l" >l</li>
                    <li class="symbol"><span class="off">;</span><span data-keyboardvalue=":" class="on">:</span></li>
                    <li class="symbol"><span class="off">'</span><span data-keyboardvalue="" class="on">&quot;</span></li>
                    <li class="return lastitem" data-keyboardvalue="return" >return</li>
                    <li class="left-shift" data-keyboardvalue="shift" >shift</li>
                    <li class="letter" data-keyboardvalue="z" >z</li>
                    <li class="letter" data-keyboardvalue="x" >x</li>
                    <li class="letter" data-keyboardvalue="c" >c</li>
                    <li class="letter" data-keyboardvalue="v" >v</li>
                    <li class="letter" data-keyboardvalue="b" >b</li>
                    <li class="letter" data-keyboardvalue="n" >n</li>
                    <li class="letter" data-keyboardvalue="m" >m</li>
                    <li class="symbol"><span class="off">,</span><span class="on" data-keyboardvalue="=" >&lt;</span></li>
                    <li class="symbol"><span class="off">.</span><span class="on" data-keyboardvalue="=" >&gt;</span></li>
                    <li class="symbol"><span class="off">/</span><span class="on" data-keyboardvalue="?" >?</span></li>
                    <li class="right-shift lastitem" data-keyboardvalue="shift" >shift</li>
                    <li class="space lastitem" data-keyboardvalue="=" >&nbsp;</li>
                </ul>
            </div>
        </div>
    )
};

export default Keyboard;