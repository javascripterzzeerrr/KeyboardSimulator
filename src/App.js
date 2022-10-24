import { useState } from 'react';

import './App.scss';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Welcome from './components/welcome/Welcome';

function App() {
  const [press, setPress] = useState(true);

  const onPressEnter = () => {
    setPress(false);
  }

  return (
    <div className="App">
    {
      press 
        ? <Welcome onPressEnter={onPressEnter} /> 
        : <>
          <Header />
          <Main />
          </>
    } 
    </div>
  );
}

export default App;
