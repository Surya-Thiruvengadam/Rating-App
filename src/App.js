import { useState } from 'react';
import './App.css';
import Ratingfinder from './Ratingfinder';
import Thankscom from './Thankscom';
function App() {
  const [rating,setrating]=useState(null)
  return (
    <div className='container'>
      <header>
    { rating!=null? <Thankscom rating={rating}/>:<Ratingfinder setrating={setrating}/>}
      </header>
    </div>
  );
}

export default App;
