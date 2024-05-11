import {useState, useRef } from 'react'

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);


  const startStopWatch=()=>{
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

  }

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div>
      <div>Time: {formatTime(elapsedTime)}</div>
      <button onClick={isRunning ? stopStopwatch : startStopWatch}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetStopwatch}>Reset</button>
      </div>
     
    </div>
  );
}

export default App;
