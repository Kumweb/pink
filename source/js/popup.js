var form = document.querySelector('.form');
var validateBtn = document.querySelector('.form__button');

var formInputs = document.querySelectorAll('.js-input');

var formName1 = document.querySelector('.form__name-1');
var formName2 = document.querySelector('.form__name-2');

var formNumber = document.querySelector('.form__contacts-number');
var formEmail = document.querySelector('.form__contacts-email');

var fields = document.querySelector('.field');

var popupField = document.querySelector('.popup__failed');

var failedBtn = document.querySelector('.popup__button-failed');

form.onsubmit = function (event) {
  event.preventDefault();
  var nameVal1 = formName1.value;
  var nameVal2 = formName2.value;
  var numberVal = formNumber.value;
  var emailVal = formEmail.value;

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('form__error');
      popupField.classList.add('popup__failed--hidden');
    } else {
      input.classList.remove('form__error');
    }
  });
};

window.addEventListener('keydown', function (evt) {
  if (evt.code === 'Escape' || evt.code === 'Enter') {
    console.log('Кнопка Esc');
    if (popupField.classList.contains('popup__failed--hidden')) {
      popupField.classList.remove('popup__failed--hidden');
    }
  }
});

failedBtn.addEventListener('click', function (evt) {
  evt.preventDefault;
  console.log('Button Failed');
  popupField.classList.remove('popup__failed--hidden');
});
