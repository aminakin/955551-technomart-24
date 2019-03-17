var writeUsShow = document.querySelector('.button-write-us-show');
var writeUsClose = document.querySelector('.write-us-close');
var writeUs = document.querySelector('.modal-write-us');
var form = writeUs.querySelector('form');
var textarea = writeUs.querySelector('textarea');
var email = writeUs.querySelector('[name=email]');
var yourname = writeUs.querySelector('[name=name]');
var mapShow = document.querySelector('.map-little');
var mapClose = document.querySelector('.map-close');
var map = document.querySelector('.modal-map');
var sold = document.querySelector('.modal-sold');
var buy = document.querySelectorAll('.button-buy');
var favorite = document.querySelectorAll('button-favorite');

writeUsShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUs.classList.add('modal-show');
  yourname.focus();
});

writeUsClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUs.classList.remove('modal-show');
  writeUs.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
  if (!yourname.value || !textarea.value || !email.value) {
    evt.preventDefault();
    writeUs.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains('modal-show')) {
      map.classList.remove('modal-show');
    }
    if (writeUs.classList.contains('modal-show')) {
      writeUs.classList.remove('modal-show');
      writeUs.classList.remove('modal-error');
    }
  }
});

mapShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});
