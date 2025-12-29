const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit__btn');
const emailInput = document.querySelector('.email__input')
const errorMessage = document.querySelector('.error__message')

// form.addEventListener('submit', (e) => {
  
// if (emailInput === '' || !emailInput.includes('@')) {
//   e.preventDefault()
//   errorMessage.innerText = 'Valid Email is required'
// }
// })

form.addEventListener('submit', (e) => {
if (emailInput.value === '' || ![...emailInput.value].includes('@')) {
   e.preventDefault()
   errorMessage.textContent = 'Valid Email is required'
 }
})