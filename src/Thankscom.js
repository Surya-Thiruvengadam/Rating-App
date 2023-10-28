import React from "react";
import them from "./images/illustration-thank-you.svg";
function Thankscom({ rating }) {
  return (
    <div id="thankscom">
      <img src={them} />
      <h5> You selected {rating} out of 5</h5>
      <h1>Thank you!</h1>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thankscom;
