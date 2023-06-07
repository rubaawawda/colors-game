import React from "react";
import './win.css'






const Win = (props) => {
  return (
    <div>
      {
        props.win && <div>
          <h1>Congratulations!</h1>
          <h3>You've Won</h3>
          <button onClick={() => {
            props.setAnswers([]);
            props.setWin(false);
          }}>Restart</button>
        </div>
      }
      <hr />
    </div>
  )
}
export default Win