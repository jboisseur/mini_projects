import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonWrapper from "./components/ButtonWrapper";
import Keyboard from "./components/Keyboard";


/* WARNING This app uses eval() function. Do NOT use in production */

/* 1 more test to pass:
- only 1 decimal point per number allowed - 5.5.5 should be considered as 5.55
*/

const App = () => {
  
  let operator = ["+", "-", "*", "/"];

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

      else if (value === "." && precedingChar === ".") { // If another decimal is hit, ignore
      }

      // if value is an operator
      else if (operator.indexOf(value) !== -1) {
        if (operator.indexOf(precedingChar) !== -1) { // found a preceding operator
          if (precedingChar === "*" || precedingChar === "/") {
            if (value === "-") {
              displayZone.innerHTML += value;
            } // keep it, "-" is the sign          
          }

          // check if the character before preceding is also an operator
          if (operator.indexOf(displayZone.innerHTML.charAt(displayZone.innerHTML.length - 2)) !== -1) { 
            // if yes and if preceding is not * remove it
            if (precedingChar !== "*") {
              displayZone.innerHTML = displayZone.innerHTML.slice(0, -2)
              displayZone.innerHTML += value;
            }
          }

          else {
            displayZone.innerHTML = displayZone.innerHTML.slice(0, -1) // remove preceding operator
            displayZone.innerHTML += value; // replace by newly hit
          }
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

  function cleanUp(string) {
    /* 
    * - + : garder le dernier
    * - : garder les 2
    */
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