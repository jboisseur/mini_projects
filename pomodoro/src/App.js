import './App.scss';
import Config from "./components/Config";

function App() {
  return (
    <>
      <h1>Pomodoro clock</h1>      
      <p className="Introduction"><strong>Divide and conquer any task!</strong> <br/>
        Use this time management technique that breaks work into intervals of your choice. <br/>
       Default configuration is a session of 25 minutes and a break of 5.</p>
      <p><strong>Warning:</strong> please be aware that a bell rings when Session or Break time is up.</p>
      <div className="App">
        <Config/>
      </div>
    </>

  );
}

export default App;