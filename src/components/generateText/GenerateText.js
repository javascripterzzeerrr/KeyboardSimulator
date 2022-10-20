import { useState } from 'react';

import './GenerateText.scss';

const GenerateText = ({letter}) => {
    const [listWords, setListWords] = useState([
        "Lorem ", "ipsum ", "dolor ", "sit ", "amet ", "consectetur ", "adipisicing ", "elit. ", "Quis ", "voluptates ", "fugiat ", "repellat ", "beatae ", "eum ", "doloribus ", "aliquid ", "aspernatur ", "nihil ", "earum, ", "molestiae ", "velit ", "at ", "totam ", "accusantium maiores, ", "hic", "vel ", "architecto ", "facere ", "quidem?"
    ]);

    function checkWord() {
        
    }

    return (
        <div class="generatorText">
            <p class="generator">{listWords.join(" ")}</p>
        </div>
    );
}

export default GenerateText;