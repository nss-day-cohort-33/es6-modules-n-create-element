console.log("card js loaded")

let cardCounter = 1

function helperFunc() {
  console.log("WTF")
  return "hello"
}

function createCardComponent(text) {
  console.log("imported from foo", lastName)
  let newElement = document.createElement("section")
  newElement.setAttribute('class', 'card')
  newElement.setAttribute('id', `card-${cardCounter}`)
  newElement.innerHTML = `
    <h3>${text}</h3>
    <button id="deleteBtn-${cardCounter}">delete</button>
  `
  return newElement
}

function addCardToDom(element, card) {
  element.appendChild(card)
  cardCounter++
}

function deleteCard(parent, event) {
  if (event.target.id.includes("deleteBtn")) {
    let idNum = event.target.id.split('-')[1]
    let cardToDelete = document.querySelector(`#card-${idNum}`)
    parent.removeChild(cardToDelete)
  }
}

export {createCardComponent, addCardToDom, deleteCard}
