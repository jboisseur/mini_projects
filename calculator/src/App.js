import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";

/* 
2 more tests to pass:
- only 1 decimal point per number allowed - 5.5.5 should be considered as 5.55
> to resolve we could try to add decimal point only if number of decimal points for the current number is set to 0. So we need:
. to count the number of decimal point
. to reset to 0 each time a operator is clicked

- If 2 or more operators are entered consecutively, the operation performed should be the last operator entered excluding the negative (-) sign. For instance the sequence "5 * - + 5" = should produce an output of "10"
> to resolve we could use the following logic: if an operator is preceding, replace it by the one just hit.

Left to do  :
. There seems to be security risks with eval function so it should also be replaced.
. The test suite provide numbers in red, answers take too long. Optimize?
. Work on the CSS
*/

const App = () => {

  const displayToScreen = (event) => {
    event.preventDefault();
    let value = event.target.innerHTML;
    let displayZone = document.getElementById("display");
    let string = "";
    let precedingChar = displayZone.innerHTML.charAt(displayZone.innerHTML.length - 1);

    if (value !== "Clear" && value !== "=") {     
      if (displayZone.innerHTML == "0") {
        displayZone.innerHTML = value;
      }
      else if (value == "." && precedingChar == ".") {
        // change here for decimal point case
      }
      else {
        displayZone.innerHTML += value;
      }
    }
    else if (value === "Clear") {
      displayZone.innerHTML = "0";
    }
    else { // case where value == "="
      string = displayZone.innerHTML;
      calculate(string);
    }
    }
  
  function calculate(string) {
    let displayZone = document.getElementById("display");
    displayZone.innerHTML = eval(string);
  }


  return (
    <>
    <Keyboard onClick={displayToScreen} />
    <Screen />
    </>
  );
};

export default App;