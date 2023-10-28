import React from 'react'
import Questioncom from './Questioncom';
import Ratingcom from './ratingcom';
function Ratingfinder({setrating}) {
  return (
    <div>
        <Questioncom/>
        <Ratingcom setrating={setrating}/>
    </div>
  )
}

export default Ratingfinder