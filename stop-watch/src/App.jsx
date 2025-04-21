import { useState,useRef } from "react";
import "./index.css";

function App() {
  const [time,setTime] = useState(0);
  const[isRunning,setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning){
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime +1);
      },1000)
    }
};

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  };

  return (
    <>
    <div className="container">
      <h2>Simple Stop Watch</h2>
      <p className="time">{formatTime()}</p>
      <div className="buttons"> 
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
    </>
    ); 
  }

  export default App