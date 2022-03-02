import { useState } from 'react';
import './App.css';
import Bubble from './Sorting/Bubble';
import Insertion from './Sorting/insertion';
import Quick from './Sorting/Quick';
import Testsorting from './Sorting/Testsorting';

function App() {
  const [text,setText] = useState('Selection_Sort')
  return (
    <div className="App">
      <button onClick={()=>{setText('Selection_Sort')}}>Selection Sort</button>
      <button onClick={()=>{setText('Insertion_Sort')}}>Insertion Sort</button>
      <button onClick={()=>{setText('Bubble_Sort')}}>Bubble Sort</button>
      <button onClick={()=>{setText('Quick_Sort')}}>Quick Sort</button>
      {text === 'Selection_Sort'?<Testsorting/>:text === 'Insertion_Sort'?<Insertion/>:text === 'Quick_Sort'?<Quick/>:<Bubble/>}
    </div>
  );
}

export default App;
