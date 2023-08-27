import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";

const App = () => {

  const displayToScreen = (event) => {
    event.preventDefault();
    let value = event.target.innerHTML;

    document.getElementById("display").innerHTML = value;
  }


  return (
    <>
    <Screen />
    <Keyboard onClick={displayToScreen} />
    </>
  );
};

export default App;