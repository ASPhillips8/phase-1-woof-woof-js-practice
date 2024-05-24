document.addEventListener("DOMContentLoaded", () =>  {

  const url = "http://localhost:3000/pups"

  fetch(url)
  .then ((response) => response.json())
  .then((dogData) => dogData.forEach((dog) => renderDogBar(dog)))



  const dogBar = document.querySelector("#dog-bar")
  const dogInfo = document.querySelector("#dog-info")

  function renderDogBar(dog) {

  const span = document.createElement("span")
  const button = document.createElement("button")
  const img = document.createElement("img")
  const h2 = document.createElement("h2")
  const goodButton = document.createElement("button")

  span.textContent = `${dog.name}`
  span.style.cursor = "pointer"

  span.addEventListener("click" , () => {
    console.log("click")
  })












  dogBar.appendChild(span)
  }



})

