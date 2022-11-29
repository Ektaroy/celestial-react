
  document.getElementById("answerC").addEventListener("click", popUp);
  function popUp() {
    let answerC = document.getElementById('answerC');

    var num = prompt("Enter your gy ");
    if (num >= 2024) {

      alert("you can'nt answer this quesion!!");
    }
    else {
     








// Create a new element

let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
text = document.createTextNode('');
}
else{
  text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', ' background: #F0EFEF;border-radius:12px; width: 90%; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
  let noTextAreas = document.getElementsByClassName('textarea').length;
  if(noTextAreas ==0){
  let html = elem.innerHTML;
  divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  //listen for the blur event on textarea
  let textarea = document.getElementById('textarea');
  textarea.addEventListener('blur', function() {
      elem.innerHTML = textarea.value;
      localStorage.setItem('text', textarea.value);
  })
});



}}