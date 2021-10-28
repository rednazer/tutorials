// Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

// Multiple element
//console.log(document.querySelectorAll('.container'));

//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'New Element Text';
//ul.children[1].innerText = 'Another way to edit text';
//ul.lastElementChild.innerHTML = '<h1>New Header 1 </h1>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'blue';

// There are other events besides on click, they can be looked up
//const btn = document.querySelector('.btn');
//btn.addEventListener('click', (e) => {
//  e.preventDefault();
//  console.log('You clicked the button.');
//  document.querySelector('#my-form').style.background = '#ccc';
//  document.querySelector('body').classList.add('bg-dark');
//  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello!</h1>';
//});

// This is really cool you can pretty much get any information that you want from this
//document.addEventListener('click', (e) => {
//  console.log(e.target);
  //console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
//});


// Adds a list item of the name below if both fields are filled out
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }