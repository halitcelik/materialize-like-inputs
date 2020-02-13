const form = document.querySelector("form");
const inputsArray = form.querySelectorAll("input");
const textArea = form.querySelectorAll("textarea");
inputsArray.forEach(input => input.addEventListener("blur",         function(e) {
        let label = e.target.previousElementSibling;
        if (e.target.value.trim() === '') {
            e.target.classList.remove("focused")
            label.classList.remove("focused");
        }
    }))
inputsArray.forEach(input => input.addEventListener("focus",      function(e) {
       let label = e.target.previousElementSibling;
       if (e.target.value.trim() === '') {
          e.target.classList.add("focused");
          label.classList.add("focused");
       }
    }))
const focusButton = document.getElementById("focus-button");
const blurButton = document.getElementById("blur-button");

focusButton.addEventListener('click', function(){
  let nameInput = document.getElementById("name");
  var e = document.createEvent('HTMLEvents');
  e.initEvent('focus', false, true);
  inputsArray.forEach(input => input.dispatchEvent(e))
})

blurButton.addEventListener('click', function(){
  let nameInput = document.getElementById("name");
  var e = document.createEvent('HTMLEvents');
  e.initEvent('blur', false, true);
  inputsArray.forEach(input => input.dispatchEvent(e))
})
