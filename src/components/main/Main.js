import { useState } from 'react';
import GenerateText from "../generateText/GenerateText";
import Keyboard from "../keyboard/Keyboard";

import '../textArea/TextArea.scss';

const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cumque modi alias ut voluptatibus eum omnis quia porro nesciunt possimus expedita harum odio asperiores nulla, iusto pariatur unde beatae voluptas?";

const Main = () => {
    const [currentLetter, setCurrentLetter] = useState(""); // текущий символ
    const [keyBoard, setKeyBoard] = useState(""); // нажатая клавиша
    const [value, setValue] = useState("");
    
    console.log("VALUE: ", value);

    // hack - bullshit...
    const LETTERS = TEXT.split("");

    const lastSymbol = (text) => {
        const arr = text.length > 0 ? text.split("") : null;

        if (arr === null) {
          setValue("");
          return;
        }

        const lastIndex = arr.length - 1 <= 0 ? 0 : arr.length - 1;
        return {arr: arr[lastIndex], last: lastIndex};
    }

    const compareSymbols = (text) => {
        let {arr, last} = lastSymbol(text);
        console.log("arr: ", arr);
        console.log("LETTERS: ", LETTERS[last]);
        if (arr === LETTERS[last]) {
          setValue(text);
        }
    }

    const onChangeLetter = (symbol) => {
        setCurrentLetter(symbol);
    }

    const onPressBoard = (event) => {
      setKeyBoard(event.code); // example return KeyX
    };

    const onValueText = (e) => {
      let trgt = e.target.value;
      console.log("SYMBOL: ", trgt);
      compareSymbols(trgt);
    };

    return (
        <main className="main">
        <div className="container">
          <div className="content">
            {/* <TextArea onChangeLetterInput={onChangeLetterInput} keyBoardsState={keyBoardsState} /> */}
            <div className="input__content">
              <textarea onKeyUp={onPressBoard} onChange={onValueText} className="field" id="story" name="story" value={value}>
              </textarea>
            </div>
            <GenerateText onChangeLetter={onChangeLetter} paint={value} />
            <Keyboard keyBoardValue={keyBoard} />
          </div>
        </div>
      </main>
    );
};

export default Main;