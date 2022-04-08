var $submitBtn = document.querySelector('.submit-btn');
var $addEntryBtn = document.querySelector('.button-add-entry');
var $overlay = document.querySelector('.overlay');
var $modalContent = document.querySelector('.modal-content');
var $dayOfWeekContainer = document.querySelector('.day-of-week-container');
var $selectedDay = document.querySelector('.selected-day');
var $form = document.querySelector('form');

$addEntryBtn.addEventListener('click', function () {
  $overlay.classList.remove('hidden');
  $modalContent.classList.remove('hidden');

});

$dayOfWeekContainer.addEventListener('click', function (event) {
  if (event.target.nodeName === 'BUTTON') {
    event.target.className = 'day-of-week white selected';
    $selectedDay.innerHTML = event.target.innerHTML;
  }
});

$form.addEventListener('submit', function (event) {
  // console.log('hello');
});
