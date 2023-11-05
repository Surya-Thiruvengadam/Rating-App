import React from "react";
import star from "./images/icon-star.svg";
function Questioncom() {
  return (
    <section className="questioncon">
      <div>
        <img src={star} alt="Star" />
        <div>
          <h1>How did we do?</h1>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Questioncom;
