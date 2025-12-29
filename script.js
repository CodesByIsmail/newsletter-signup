const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit__btn');
const emailInput = document.querySelector('.email__input')
const errorMessage = document.querySelector('.error__message')
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const successPage = document.querySelector('.success')
const signupPage = document.querySelector('.signup')

const userEmail = document.querySelector('.user__email')
const dismissBtn = document.querySelector('.dismiss__btn')



// form.addEventListener('submit', (e) => {
  
// if (emailInput === '' || !emailInput.includes('@')) {
//   e.preventDefault()
//   errorMessage.innerText = 'Valid Email is required'
// }
// })

form.addEventListener('submit', (e) => {
if (emailInput.value === '' || !emailPattern.test(emailInput.value) ) {
   e.preventDefault()
   errorMessage.textContent = 'Valid Email is required'
   emailInput.classList.add('error__btn');
   emailInput.style.border = '1px solid red';
   emailInput.style.background = '#FF62574A'
 } else {
   successPage.style.display = 'flex'
 signupPage.style.display = 'none'
 e.preventDefault()
 userEmail.textContent = emailInput.value
 }
 
// emailInput.addEventListener('invalid', () => {
//   errorMessage.textContent = 'Enter Valid Email'
// })
 
// if(!emailPattern.test(emailInput.value)){
//   e.preventDefault()
//   errorMessage.textContent = 'Valid Email is required'
//   emailInput.style.background = '#FF62574A'
//   emailInput.style.border = '1px solid red'
// }
 
 emailInput.addEventListener('input', () => {
  errorMessage.textContent = '';
   emailInput.style.border = '1px solid hsla(0, 0%, 58%, 1)'
   emailInput.style.background = 'none'
 })
})

dismissBtn.addEventListener('click', (e) => {
  e.preventDefault();
  successPage.style.display = 'none'
 signupPage.style.display = 'block'
 emailInput.value = ''
})