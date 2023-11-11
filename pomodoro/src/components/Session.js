import { useState, useEffect } from "react";
import sound from './beep.mp3'

const Session = ({config, beep}) => {
    const messages = {
        "session": "Session",
        "break": "Break time!"
    };

    const [isRunning, setRunning] = useState (false)
    const [timeLeft, setTimeLeft] = useState (1500)
    const [isSession, setIsSession] = useState (messages["session"])
    
    // Update when config changes or Reset is hit
    useEffect(() => {
        setRunning(false);
        setTimeLeft(config["session"] * 60); // Changes minutes to seconds        
        setIsSession(messages["session"]);
    }, [config]);

    // Countdown
    useEffect(() => {
        const runTimer = setTimeout(() => {
            isRunning ? setTimeLeft(timeLeft - 1) : clearTimeout(runTimer)
        }, 1000);

        return () => {
            clearTimeout(runTimer)
        }
    }, [timeLeft, isRunning])

    // Handle 00:00
    if (timeLeft === 0 && isRunning) {
        beep.current.play();
    }
    
    if (timeLeft < 0) {  // 00:00 must be displayed 1 second
       toggleType(Object.keys(messages).find(key => messages[key] === isSession)); // The argument is the key corresponding to isSession message     
    }
    
    // When Run or Stop button is hit, setRunning to opposite value
    const toggleIsRunning = () => { 
        setRunning(!isRunning);              
    }

    // Toggle to Break after Session and to Session after Break
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

    let minutes = addZero(Math.floor(timeLeft / 60));
    let seconds = addZero(timeLeft - minutes * 60);

    let formattedTiming = minutes + ':' + seconds

    return (
        <>
         <h2><span id="timer-label">{isSession}</span></h2>
         <p id="time-left">{formattedTiming}</p>
         <button id="start_stop" onClick={toggleIsRunning}>{isRunning ? "Stop" : "Run"}</button>
         <audio id="beep" src={sound} ref={beep} load="auto"/>
        </>
    )
  };
  
  export default Session;