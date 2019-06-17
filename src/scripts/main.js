console.log("Main js loaded")
import {createCardComponent, deleteCard, addCardToDom} from "./card.js"

let cardInput = document.querySelector("#card-text-input")
let cardList = document.querySelector("#card-list")

// throws an error, because helperFunc was not exported from cardInput.js
// console.log(helperFunc())

document.querySelector("#card-text-btn").addEventListener("click", () => {
  let cardText = cardInput.value
  let newCard = createCardComponent(cardText)
  newCard.addEventListener("click", () => {
    deleteCard(cardList, event)
  })
  addCardToDom(cardList, newCard)
})
