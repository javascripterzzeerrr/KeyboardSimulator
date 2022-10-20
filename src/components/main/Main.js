import { useState } from 'react';

import TextArea from "../textArea/TextArea";
import GenerateText from "../generateText/GenerateText";
import Keyboard from "../keyboard/Keyboard";

const Main = () => {
    const [letter, setLetter] = useState("");
    const [keyBoard, setKeyBoard] = useState("");

    const onChangeLetter = (symbol) => {
        setLetter(symbol);
    }

    const keyBoardsState = (key) => {
        setKeyBoard(key);
        console.log('update state');
    };

    console.log('state: ', keyBoard);

    return (
        <main className="main">
        <div className="container">
          <div className="content">
            <TextArea onChangeLetter={onChangeLetter} keyBoardsState={keyBoardsState} />
            <GenerateText cntLetter={letter} />
            <Keyboard keyBoardValue={keyBoard} />
          </div>
        </div>
      </main>
    );
};

export default Main;