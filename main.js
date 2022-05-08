// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const listg = document.querySelectorAll(".like-glyph")
const errorMessage = document.querySelector("#modal-message")
const hidden = document.querySelector('#modal')
hidden.classList.add('hidden')


listg.forEach(glyph =>{glyph.addEventListener('click',() =>
mimicServerCall()
.then(()=>{
  if (glyph.textContent !== FULL_HEART) {
    glyph.classList.add("activated-heart")
    glyph.textContent = FULL_HEART
  }
  else if (glyph.textContent === FULL_HEART) { 
    glyph.textContent = EMPTY_HEART
    glyph.classList.remove("activated-heart")
  }
})
.catch((error) => {
  hidden.classList.remove("hidden")
  errorMessage.textContent = error
  setTimeout(hideAgain, 3000)
})
)
}) 

function thishiden() {
  return hidden.classList.add("hidden")
}
console.log(listg)


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
