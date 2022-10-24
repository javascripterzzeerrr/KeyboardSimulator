import { useState, useEffect, useRef } from 'react';

import './TextArea.scss';

const TextArea = ({onChangeLetterInput, keyBoardsState}) => {
    const [value, setValue] = useState("");

    const textAreaRef = useRef();

    const onPressBoard = (event) => {
        keyBoardsState(event.code); // example return KeyX
    };

    const onValueText = (e) => {
        let trgt = e.target.value;
        onChangeLetterInput(trgt);
        setValue(trgt);
    };

    useEffect(() => {
        textAreaRef.current.focus();
    }, []);

    return (
        <div className="input__content">
            <textarea ref={textAreaRef} onKeyUp={onPressBoard} onChange={onValueText} className="field" id="story" name="story" value={value}>
            </textarea>
        </div>
    );
};

export default TextArea;