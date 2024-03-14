//Build a character counter for a text area or input field,which updates real
//user type and enforces a character limit
var textarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");
textarea.addEventListener("input",function(){
         counter.textContent = textarea.value.length;
})