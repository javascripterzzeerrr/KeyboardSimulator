import { useState } from 'react';

import './GenerateText.scss';

const GenerateText = ({paint}) => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cumque modi alias ut voluptatibus eum omnis quia porro nesciunt possimus expedita harum odio asperiores nulla, iusto pariatur unde beatae voluptas?";

    const [listWords, setListWords] = useState(text.split(""));

    let segment = 0;

    if (text.indexOf(paint) !== -1) {
        segment = text.indexOf(paint) + paint.length - 1;
        console.log("Segment: ", segment);
    }

    function renderDigit() {
        return listWords.map((val, index) => {
            return index <= segment 
                ?
                <span className="yellow" key={index}>{val}</span>
                :
                <span key={index}>{val}</span>
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