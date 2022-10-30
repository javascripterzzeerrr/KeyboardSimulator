import { useState } from 'react';

import GenerateText from "../generateText/GenerateText";
import Keyboard from "../keyboard/Keyboard";

const Main = () => {
    const [currentLetter, setCurrentLetter] = useState(""); // текущий символ
    const [currentLetterInput, setCurrentLetterInput] = useState(""); // текущий введенный символ
    const [keyBoard, setKeyBoard] = useState(""); // нажатая клавиша
    const [isValidSymbol, setIsValidSymbol] = useState(false);

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cumque modi alias ut voluptatibus eum omnis quia porro nesciunt possimus expedita harum odio asperiores nulla, iusto pariatur unde beatae voluptas?";
    const [listWords, setListWords] = useState(text.split(""));

    console.log("Текущий введенный символ:", currentLetterInput);
    // console.log("Текущая клавиша:", keyBoard);

    const lastSymbol = () => {
        console.log('currentLetterInput: ', currentLetterInput);
        const arr = currentLetterInput.split("");
        const lastIndex = arr.length - 1 <= 0 ? 0 : arr.length - 1;
        return {arr: arr[lastIndex], last: lastIndex};
    }

    const compareSymbols = () => {
        const {arr, last} = lastSymbol();
        if (arr === listWords[last]) {
            setIsValidSymbol(true);
            return;
        }
        setIsValidSymbol(false);
    }

    const onChangeLetter = (symbol) => {
        setCurrentLetter(symbol);
    }

    const onChangeLetterInput = (symbolInput) => {
        setCurrentLetterInput(symbolInput);
    }

    const keyBoardsState = (key) => {
        setKeyBoard(key);
    };

    compareSymbols();

    return (
        <main className="main">
        <div className="container">
          <div className="content">
              <div className="input__content">
                <textarea onKeyUp={onPressBoard} onChange={onValueText} className="field" id="story" name="story" value={value}>
                </textarea>
              </div>
            <GenerateText cntLetter={currentLetter} onChangeLetter={onChangeLetter} />
            <Keyboard keyBoardValue={keyBoard} />
          </div>
        </div>
      </main>
    );
};

export default Main;