import { useState } from 'react';

function App() {
  const [entry, setEntry] = useState('');
  /*const [memories, setMemories] = useState([]);*/

  return (
    <div>
      <h1>Luminary</h1>
      <p>Your inner life as a night sky.</p>

      <textarea 
        placeholder="Write a thought, memory, or gratitude here..."
        value = {entry}
        onChange={(event) => setEntry(event.target.value)}
      />

      <p>You wrote: {entry}</p>
    </div>
  )

}

export default App;

 