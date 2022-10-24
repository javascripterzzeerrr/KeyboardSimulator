import { useState } from 'react';

import './TextArea.scss';

const TextArea = ({onChangeLetterInput, keyBoardsState, isValidSymbol}) => {
    const [value, setValue] = useState("");

    const onPressBoard = (event) => {
        keyBoardsState(event.code); // example return KeyX
        // console.log(event.code);
    };

    const onValueText = (e) => {
        let trgt = e.target.value;
        onChangeLetterInput(trgt);
        if (isValidSymbol) {
            setValue(trgt);
        }
    };

    return (
        <div className="input__content">
            <textarea onKeyUp={onPressBoard} onChange={onValueText} className="field" id="story" name="story" value={value}>
            </textarea>
        </div>
    );
};

export default TextArea;