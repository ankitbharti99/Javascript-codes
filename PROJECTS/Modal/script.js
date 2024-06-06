'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  //   console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keyup', function (e) {
  //   console.log('A key is pressed'); //keydown,keyup,etc.
  //   console.log(e);
  console.log(e.key);
  /*The info. about which key is pressed will be stored in the event that is going to occur as soon as any key is pressed.
   So, as anyone hit any key on the keyboard a 'keyup' event is generated.
  And when the keyboard event occurs JS generate an object and that object conatins all the info. about the event itself.
   and we can then access that object in the 'event handler function'.
   So, here, in function 'e' is the object which is passed as argument.
  */

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
