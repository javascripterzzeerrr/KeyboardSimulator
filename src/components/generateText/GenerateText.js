import { useState } from 'react';

import './GenerateText.scss';

const GenerateText = ({cntLetter}) => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cumque modi alias ut voluptatibus eum omnis quia porro nesciunt possimus expedita harum odio asperiores nulla, iusto pariatur unde beatae voluptas?";

    const [begginText, setBegginText] = useState(text);
    const [listWords, setListWords] = useState(text.split(""));

    function renderDigit() {
        return listWords.map((val, index) => {
            return <span key={index}>{val}</span>
        });
    }

    const words = renderDigit();

    return (
        <div className="generatorText">
            <p className="generator">{words}</p>
        </div>
    );
}

export default GenerateText;