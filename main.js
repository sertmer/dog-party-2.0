var dogNameInput = document.querySelector('#doggo');
var nameThisDogButton = document.querySelector('#submit-name');
var spanSearch = document.querySelector('span');

nameThisDogButton.addEventListener('click', function() {
  var dogName = dogNameInput.value;
  spanSearch.innerText = dogName;
  event.preventDefault();
  document.getElementById("my-form").reset();
});
