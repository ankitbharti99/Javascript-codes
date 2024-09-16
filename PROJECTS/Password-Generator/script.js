const randomPass = document.getElementById("password");

const length = 9;

const uppeerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const character = "!@#$%^&*(){}[]<>?/|~`.,";

const allChars = uppeerCase + lowerCase + number + character;

document.getElementById("generate").addEventListener("click", function () {
  let password = "";
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  randomPass.value = password;
});

/*
function passwordGen() {
  let password = "";

  //   password += uppeerCase[Math.floor(Math.random() * uppeerCase.length)];
  //   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  //   password += number[Math.floor(Math.random() * number.length)];
  //   password += character[Math.floor(Math.random() * character.length)];

  //   console.log(password);

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  randomPass.value = password;
}

passwordGen();
*/
