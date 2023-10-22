import { useState } from "react";

const Session = ({duration}) => {
    const [startOrStop, setStartOrStop] = useState ("Run")

    return (
        <>
        <h2 id="timer-label">Session status</h2>
        <p id="time-left">{duration.session}:00</p>
        <button id="start_stop">{startOrStop}</button>
        </>
    )
  };
  
  export default Session;