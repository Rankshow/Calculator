// Stored every class in a variable
const inputPart = document.querySelector('.userinput');
const allOptions = document.querySelectorAll('.option');
const equals = document.querySelector('#equals');
const results = document.querySelector('.result');
const deleteNum = document.querySelector('.delete');
const sineButton = document.querySelector('.sine');
const cosButton = document.querySelector('.cos');
const tanButton = document.querySelector('.tan');

// sine function
const sineFunction = function () {
   const sine = Math.sin(Math.abs(inputPart.value)).toFixed(2);
   results.innerHTML = sine;
}
sineButton.addEventListener('click', sineFunction);

// cosine function 
const cosFunction = function () {
   const cos = Math.cos(Math.abs(inputPart.value)).toFixed(2);
   results.innerHTML = cos;
}
cosButton.addEventListener('click', cosFunction);

// tan function
const tanFunction = function () {
   const tan = Math.tan(Math.abs(inputPart.value)).toFixed(2);
   results.innerHTML = tan;
}
tanButton.addEventListener('click', tanFunction);

// Evaluate the total sum
const equalTo = function (){
   results.innerHTML = eval(inputPart.value);
   inputPart.value = '';
}
equals.addEventListener('click', equalTo);

// iterate over individual values
for(i = 0; i < allOptions.length; i++){
 allOptions[i].addEventListener('click', (e) =>{
    inputPart.value += e.target.value;
 });
};

// delete items on the input and result
const removeItem = function(){
   inputPart.value = '';
   results.textContent = '';
}
deleteNum.addEventListener('click', removeItem);
