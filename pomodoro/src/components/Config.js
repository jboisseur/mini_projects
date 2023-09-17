import Session from "./Session";
import { useState } from "react";

const Config = () => {
    const [breakDuration, setBreakDuration] = useState(5);
    const [sessionDuration, setSessionDuration] = useState (25)

    return (
        <>
        <h2>Configuration</h2>
        <h3 id="break-label">Break duration (minutes)</h3>
        <p><span id="break-decrement">-</span> <span id="break-length">{breakDuration}</span> <span id="break-increment">+</span></p>

        <h3 id="session-label">Session duration (minutes)</h3>
        <p><span id="session-decrement">-</span> <span id="session-length">{sessionDuration}</span> <span id="session-increment">+</span></p>

        <Session breakDuration={breakDuration} sessionDuration={sessionDuration}/>
        </>
    )
  };
  
  export default Config;