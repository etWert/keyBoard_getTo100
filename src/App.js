import './App.css';
import { useState } from 'react';

import MainGet100 from './get100/MainGet100';
import MainKeyboard from './keyboard/MainKeyboard';


function App() {
  const [game, setGame] = useState(1)

  return (
    <div className="App">
      <div className='nav'>
        <button style={{backgroundColor:game===1?"indianred":"white"}} onClick={() => { setGame(1) }}>WYSIWYG</button>
        <button style={{backgroundColor:game===2?"indianred":"white"}}  onClick={() => { setGame(2) }}>GET TO  100</button>
      </div>
      {game === 1 && <MainKeyboard />}
      {game === 2 && <MainGet100 />}

    </div>
  );
}

export default App;
