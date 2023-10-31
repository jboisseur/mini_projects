import Session from "./Session";
import { useState } from "react";

const initialState = {
    "break": 5,
    "session": 25,
    "timeleft": 1500
}

const Config = () => {
    const [duration, setDuration] = useState({
        "break": initialState["break"],
        "session": initialState["session"],
        "timeleft": initialState["timeleft"]
    })

    function updateDuration(breakOrSession, sign) {
        if (sign === "-") {
            duration[breakOrSession] > 1 ? // min break is 1 min
            setDuration({...duration, [breakOrSession]: duration[breakOrSession] - 1}) : setDuration({...duration})
        }

        else { // when sign is +
            duration[breakOrSession] < 60 ? // max session is 60 min
            setDuration({...duration, [breakOrSession]: duration[breakOrSession] + 1}) : setDuration({...duration})
        }
    }    

    return (
        <>
        <h2>Configuration</h2>
        <h3 id="break-label">Break duration (minutes)</h3>
        <p>
            <button id="break-decrement" 
            onClick={() => updateDuration("break", "-")}>-</button> <span id="break-length">{duration.break}</span> <button id="break-increment" onClick={() => updateDuration("break", "+")}>+</button>
        </p>

        <h3 id="session-label">Session duration (minutes)</h3>
        <p>
            <button id="session-decrement" onClick={() => updateDuration("session", "-")}>-</button> <span id="session-length">{duration.session}</span> <button id="session-increment" onClick={() => updateDuration("session", "+")}>+</button>
        </p>

        <Session config={duration}/>

        <button id="reset" onClick={() => setDuration(initialState)}>Reset</button>
        </>
    )
  };
  
  export default Config;