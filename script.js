const form = document.querySelector("form");
const inputsArray = form.querySelectorAll("input");
const textAreasArray = form.querySelectorAll("textarea");
textAreasArray.forEach(textarea => textarea.addEventListener("blur", function(e) {
    let label = e.target.previousElementSibling;
    if (e.target.value.trim() === '') {
        e.target.classList.remove("focused")
        label.classList.remove("focused");
    }
}))

textAreasArray.forEach(textarea => textarea.addEventListener("focus", function(e) {
    let label = e.target.previousElementSibling;
    if (e.target.value.trim() === '') {
        e.target.classList.add("focused");
        label.classList.add("focused");
    }
}))


inputsArray.forEach(input => input.addEventListener("blur", function(e) {
    let label = e.target.previousElementSibling;
    if (e.target.value.trim() === '') {
        e.target.classList.remove("focused")
        label.classList.remove("focused");
    }
}))
inputsArray.forEach(input => input.addEventListener("focus", function(e) {
    let label = e.target.previousElementSibling;
    if (e.target.value.trim() === '') {
        e.target.classList.add("focused");
        label.classList.add("focused");
    }
}))
const focusButton = document.getElementById("focus-button");
const blurButton = document.getElementById("blur-button");

focusButton.addEventListener('click', function() {
    let nameInput = document.getElementById("name");
    var e = document.createEvent('HTMLEvents');
    e.initEvent('focus', false, true);
    textAreasArray.forEach(input => input.dispatchEvent(e));
    inputsArray.forEach(input => input.dispatchEvent(e));
})

blurButton.addEventListener('click', function() {
    let nameInput = document.getElementById("name");
    var e = document.createEvent('HTMLEvents');
    e.initEvent('blur', false, true);
    textAreasArray.forEach(input => input.dispatchEvent(e));
    inputsArray.forEach(input => input.dispatchEvent(e))
})



function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
