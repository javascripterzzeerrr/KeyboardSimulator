import { useState } from 'react';
import './App.scss';

import Header from './components/header/Header';
import TextArea from './components/textArea/TextArea';
import GenerateText from './components/generateText/GenerateText';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  const [letter, setLetter] = useState("");

  const onChangeLetter = (symbol) => {
    setLetter(symbol);
  }

  return (
    <div className="App">
      <Header />
      <main class="main">
        <div class="container">
          <div class="content">
            <TextArea onChangeLetter={onChangeLetter}/>
            <GenerateText letter={letter} />
            <Keyboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
