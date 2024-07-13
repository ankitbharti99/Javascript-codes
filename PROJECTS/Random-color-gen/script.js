// const button = document.getElementById('btn').textContent;

const getColor = () => {
  //hex code
  const randomNumber = Math.trunc(Math.random() * 16777215);
  const randomCode = '#' + randomNumber.toString(16);
  //   console.log(randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById('color-code').textContent = randomCode;
};

document.getElementById('btn').addEventListener('click', getColor);
// getColor();
