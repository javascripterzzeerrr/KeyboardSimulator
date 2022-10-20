import { useState } from 'react';

import './TextArea.scss';

const TextArea = ({onChangeLetter}) => {
    const [value, setValue] = useState("");

    const onValueText = (e) => {
        let trgt = e.target.value;
        onChangeLetter(trgt);
        setValue(trgt);
    };

    return (
        <div class="input__content">
            <textarea onChange={onValueText} class="field" id="story" name="story" value={value}>
            </textarea>
        </div>
    );
};

export default TextArea;