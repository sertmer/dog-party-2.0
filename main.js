function handleSubmitName(event) {
  console.log(event);

}

document.querySelector("#submit-name").addEventListener("click", function(event) {
  event.preventDefault()
  handleSubmitName(event)
})
