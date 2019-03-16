var sold = document.querySelector('.modal-sold');
var buy = document.querySelectorAll('.button-buy');
var favorite = document.querySelectorAll('button-favorite');

for (var i = 0; i < buy.length; i ++) {
  buy[i].addEventListener('click', function(evt) {
  evt.preventDefault();
  sold.classList.add('modal-show');
  });
}

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (sold.classList.contains('modal-show')) {
      sold.classList.remove('modal-show');
    }
  }
});
