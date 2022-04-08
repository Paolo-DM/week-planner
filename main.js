var $submitBtn = document.querySelector('.submit-btn');
var $addEntryBtn = document.querySelector('.button-add-entry');
var $overlay = document.querySelector('.overlay');
var $modalContent = document.querySelector('.modal-content');
var $dayOfWeekContainer = document.querySelector('.day-of-week-container');

$addEntryBtn.addEventListener('click', function () {
  $overlay.classList.remove('hidden');
  $modalContent.classList.remove('hidden');

});

$dayOfWeekContainer.addEventListener('click', function () {
  console.log('clicked');
});
