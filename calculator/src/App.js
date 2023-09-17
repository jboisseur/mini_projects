import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonWrapper from "./components/ButtonWrapper";
import Keyboard from "./components/Keyboard";


/* WARNING This app uses eval() function. Do NOT use in production */

/* 2 more tests to pass:
- only 1 decimal point per number allowed - 5.5.5 should be considered as 5.55
> to resolve we could try to add decimal point only if number of decimal points for the current number is set to 0. So we need:
. to count the number of decimal points
. to reset to 0 each time an operator is clicked

- If 2 or more operators are entered consecutively, the operation performed should be the last operator entered excluding the negative (-) sign. 
For instance 
_ the sequence "5 * - + 5" = should produce an output of "10"
_ the sequence "5 * - 5" = should produce an output of "-25"
> to resolve we could use the following logic: if an operator is preceding, replace it by the one just hit.

Left to do  :
. The test suite provide numbers in red, answers take too long. Optimize?
*/

const App = () => {

  let decimalPoint = 0;
  let operator = ["+", "*", "/"];

  const displayToScreen = (event) => {
    event.preventDefault();
    let value = event.target.innerHTML;
    let displayZone = document.getElementById("display");
    let string = "";
    let precedingChar = displayZone.innerHTML.charAt(displayZone.innerHTML.length - 1);

    if (value !== "Clear" && value !== "=") {   
      
      if (displayZone.innerHTML === "0") { 
        displayZone.innerHTML = value; // replace default value with first hit value
      }

      else if (value === "." && precedingChar === ".") {
        // change here for decimal point case
      }

      // if value is an operator
      else if (operator.indexOf(value) !== -1) {
       if (operator.indexOf(precedingChar) !== -1 || precedingChar === "-" || operator.indexOf(displayZone.innerHTML.length -2) !== -1) { // found a preceding operator or -
        displayZone.innerHTML = displayZone.innerHTML.slice(0, -1) // remove preceding operator
        displayZone.innerHTML += value; // replace by newly hit
       }
       else {
        displayZone.innerHTML += value;
       }
      }

      else { // if value is a number
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
    <Wrapper>
      <Screen />
      <ButtonWrapper>
        <Keyboard onClick={displayToScreen} className="buttonWrapper" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default App;