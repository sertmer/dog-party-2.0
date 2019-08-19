// function handleSubmitName(event) {
//   console.log(event);
//
// }
//
// document.querySelector("#submit-name").addEventListener("click", function(event) {
//   event.preventDefault()
//   handleSubmitName(event)
// })

var dogNameInput = document.querySelector('#doggo');
var nameThisDogButton = document.querySelector('#submit-name');
var spanSearch = document.querySelector('span');

nameThisDogButton.addEventListener('click', function(){
  var dogName = dogNameInput.value;
  spanSearch.innerText = dogName;
  event.preventDefault();
});

// function nameThisDog
//
// document.querySelector.addEventListener('click',)
