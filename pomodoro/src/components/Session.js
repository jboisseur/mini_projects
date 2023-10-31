import { useState, useEffect } from "react";

const Session = ({config}) => {
    const [isRunning, setRunning] = useState (false)
    const [timeLeft, setTimeLeft] = useState (config["timeleft"])

    const messages = {
        "session": "Session",
        "break": "Break time!"
    }

    const [isSession, setIsSession] = useState (messages["session"])

    // Update timeLeft when config changes
    useEffect(() => {
        setTimeLeft(config["session"] * 60); // changes minutes to seconds
    }, [config]);

    // Run and Stop countdown
    const toggleIsRunning = () => {
        clearTimeout(runTimer);
        setRunning(!isRunning);
    }

    const runTimer = setTimeout(() => {
        // countdown
        if(timeLeft && isRunning) {
            setTimeLeft(timeLeft - 1)
        }
        else if (timeLeft === 0 && isSession === "Session") { // when 00:00 is reached from Session
            setIsSession(messages["break"]);
            setTimeLeft(config["break"] * 60)
        }
        else { // when 00:00 is reached from Break
            setIsSession(messages["session"]);
            setTimeLeft(config["session"] * 60)
        }
    }, 1000)

    // Format time left
    function addZero(num) {
        return num < 10 ? '0' + num : num
     }

    const minutes = addZero(Math.floor(timeLeft / 60));
    const seconds = addZero(timeLeft - minutes * 60);

    const formattedTiming = minutes + ':' + seconds

    return (
        <>
        <h2><span id="timer-label">{isSession}</span></h2>
        <p id="time-left">{formattedTiming}</p>
        <button id="start_stop" onClick={toggleIsRunning}>{isRunning ? "Stop" : "Run"}</button>
        </>
    )
  };
  
  export default Session;