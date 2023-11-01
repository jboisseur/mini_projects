import { useState, useEffect } from "react";

const Session = ({config}) => {
    let beep = document.getElementById("beep");
    const messages = {
        "session": "Session",
        "break": "Break time!"
    };
    const [isRunning, setRunning] = useState (false)
    const [timeLeft, setTimeLeft] = useState (config["timeleft"])
    const [isSession, setIsSession] = useState (messages["session"])

    // Update timeLeft when config changes
    useEffect(() => {
        setTimeLeft(config["session"] * 60); // Changes minutes to seconds
    }, [config]);

    // When Run or Stop button is hit
    const toggleIsRunning = () => {
        setRunning(!isRunning);
        clearTimeout(runTimer);
        setTimeLeft(timeLeft - 1); // Manage first render
    }

    // Countdown
    const runTimer = setTimeout(() => {
        if (timeLeft && isRunning) {
            setTimeLeft(timeLeft - 1)
        }
        // When 00:00 is reached 
        else if (timeLeft === 0) { 
            beep.play();
            toggleType(Object.keys(messages).find(key => messages[key] === isSession)); // The argument is the key corresponding to isSession message                    
        }
    }, 1000)    

    function toggleType(message) {
        if (message === "session") {
            setTimeLeft(config["break"] * 60);
            setIsSession(messages["break"]);
        }
        else {
            setTimeLeft(config["session"] * 60);
            setIsSession(messages["session"]);
        }     
    }

    // Format timeLeft to mm:ss
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
        <audio id="beep" src="https://lasonotheque.org/UPLOAD/mp3/2812.mp3"/>
        </>
    )
  };
  
  export default Session;