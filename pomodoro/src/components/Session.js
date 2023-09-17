import { useState } from "react";

const Session = ({breakDuration, sessionDuration}) => {
    const [startOrStop, setStartOrStop] = useState ("Run")

    return (
        <>
        <h2 id="timer-label">Session status</h2>
        <p id="time-left">{sessionDuration}:00</p>
        <div>
            <button id="start_stop">{startOrStop}</button>
            <button id="reset">Reset</button>
        </div>
        </>
    )
  };
  
  export default Session;