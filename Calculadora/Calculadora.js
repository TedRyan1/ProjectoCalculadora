/* document.getElementById("calculadora_input_Numero").defaultValue = "0"; */

let calculator_input_Number_V = document.getElementById(
  "calculadora_input_Numero"
);
let calculator_input_Number_Previews_V = document.getElementById(
  "calculadora_input_Numero_Previews"
);

let Calculator_input_AC_V = document.getElementById("Calculadora_input_AC");

let DisplayValue;

function display(DisplayValue) {
  calculator_input_Number_V.value += DisplayValue;
}

Calculator_input_AC_V.addEventListener("click", () => {
  calculator_input_Number_V.value = "";
  calculator_input_Number_Previews_V.value = "";
});

function avoid0s() {
  if (calculator_input_Number_V.value === "0") {
    calculator_input_Number_V.value = "";
  } else {
    display("0");
  }
}

function backspace() {
  let eq = calculator_input_Number_V.value;

  calculator_input_Number_V.value = eq.substring(0, eq.length - 1);
}

function displaySolve() {
  let eq = calculator_input_Number_V.value;

  calculator_input_Number_Previews_V.value = eq;

  let y = eval(eq);

  calculator_input_Number_V.value = y;

  if (y === Infinity) {
    calculator_input_Number_V.value = "Not a number";
  }
  if (y === -Infinity) {
    calculator_input_Number_V.value = "Not a number";
  }
}

//Funcao para carregar os numeros e simbolos
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  let inputVerifier = document.getElementById("calculadora_input_Numero");

  if (e.key === "0" && calculator_input_Number_V.value === "0") {
    calculator_input_Number_V.value = "";
  } else if (e.key === "0" && !(inputVerifier === document.activeElement)) {
    avoid0s();
  } else if (e.key === "1" && !(inputVerifier === document.activeElement)) {
    display("1");
  } else if (e.key === "2" && !(inputVerifier === document.activeElement)) {
    display("2");
  } else if (e.key === "3" && !(inputVerifier === document.activeElement)) {
    display("3");
  } else if (e.key === "4" && !(inputVerifier === document.activeElement)) {
    display("4");
  } else if (e.key === "5" && !(inputVerifier === document.activeElement)) {
    display("5");
  } else if (e.key === "6" && !(inputVerifier === document.activeElement)) {
    display("6");
  } else if (e.key === "7" && !(inputVerifier === document.activeElement)) {
    display("7");
  } else if (e.key === "8" && !(inputVerifier === document.activeElement)) {
    display("8");
  } else if (e.key === "9" && !(inputVerifier === document.activeElement)) {
    display("9");
  } else if (e.key === "*" && !(inputVerifier === document.activeElement)) {
    display("*");
  } else if (e.key === "/" && !(inputVerifier === document.activeElement)) {
    display("/");
  } else if (e.key === "+" && !(inputVerifier === document.activeElement)) {
    display("+");
  } else if (e.key === "-" && !(inputVerifier === document.activeElement)) {
    display("-");
  } else if (e.key === "Enter") {
    displaySolve();
  } else if (
    e.key === "Backspace" &&
    !(inputVerifier === document.activeElement)
  ) {
    backspace();
  } else if (e.key === "." && !(inputVerifier === document.activeElement)) {
    display(".");
  } else if (e.key === "(" && !(inputVerifier === document.activeElement)) {
    display("(");
  } else if (e.key === ")" && !(inputVerifier === document.activeElement)) {
    display(")");
  } else if (e.key === "Escape") {
    calculator_input_Number_V.value = "";
    calculator_input_Number_Previews_V.value = "";
  }
});

/* let inputVerifier = document.getElementById("calculadora_input_Numero");
if (inputVerifier === document.activeElement) {
  inputVerifier === true;
}
 */
