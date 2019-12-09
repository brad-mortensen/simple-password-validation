let input = document.querySelector('.password');
let greater = document.querySelector('.greater');
let less = document.querySelector('.less');
let special = document.querySelector('.special');
let number = document.querySelector('.number');
let submit = document.querySelector('.submit');

const show = () => {
  input.type === 'password' ? input.type = 'text' : input.type = 'password';
}

const validate = () => {
  let value = input.value, length = value.length;
  length > 5 ? greater.style.color = 'green' : greater.style.color = 'tomato';
  length < 20 ? less.style.color = 'green' : less.style.color = 'tomato';
  value.match(/[!@#$%^&*(),.?":{}|<>]/g) ? special.style.color = 'green' : special.style.color = 'tomato';
  value.match(/[0-9]/g) ? number.style.color = 'green' : number.style.color = 'tomato';
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (greater.style.color === 'green' && less special number)
}