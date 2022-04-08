/* eslint - disable no - global - assign */
/* global data */
/*  exported data */

var $submitBtn = document.querySelector('.submit-btn');
var $addEntryBtn = document.querySelector('.button-add-entry');
var $overlay = document.querySelector('.overlay');
var $modalContent = document.querySelector('.modal-content');
var $dayOfWeekContainer = document.querySelector('.day-of-week-container');
var $selectedDay = document.querySelector('.selected-day');
var $form = document.querySelector('form');
var $tbody = document.querySelector('.tbody');

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
  event.preventDefault();
  var entryData = {
    time: event.target.elements.,
    day:
    description:
  };
});

function renderEntry(entry) {
  var $td1 = document.createElement('td');
  var $td2 = document.createElement('td');
  var $tr = document.createElement('tr');

  $tr.appendChild($td1);
  $tr.appendChild($td2);

  return $tr;
}

window.addEventListener('DOMContentLoaded', createDomTree);

function createDomTree() {
  if (data.entries.length) {
    for (var entry of data.entries) {
      var $trEntry = renderEntry(entry);
      $tbody.appendChild($trEntry);
    }
  }
}
