import React, { useState } from "react";

function Ratingcom({ setrating }) {
  const [value, setvalue] = useState(null);
  const rating = [1, 2, 3, 4, 5];
  const clickhandler = (index) => {
    setvalue(index);
  };
  return (
    <div>
      <ul>
        {rating.map((element, index) => (
          <li
            key={index}
            onClick={() => clickhandler(index)}
            className={value===index?'clickedli':'li'}
          >
            {element}
          </li>
        ))}
      </ul>
      <button onClick={() => value != null && setrating(rating[value])}>
        submit
      </button>
    </div>
  );
}

export default Ratingcom;
