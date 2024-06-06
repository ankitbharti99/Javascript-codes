const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".circle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === "=") {
      // Perform calculation and update the screen
      // Example: screen.value = eval(screen.value);
    } else if (buttonText === "AC") {
      // Clear the screen
      screen.value = "";
    } else {
      // Append the button value to the screen
      screen.value += buttonText;
    }
  });
});
