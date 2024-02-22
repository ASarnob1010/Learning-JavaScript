//when dealing with form... and when submit button is clicked then page will automatically 
//do reloaded and js can not work.//now i need to prevent it as well as create two input form
// and if one input is black sent a error msg
// Selecting the form, input fields, and the h2 element
var form = document.querySelector("form");
var inputall = document.querySelectorAll('input[type="text"]');
var h2 = document.querySelector("h2");

form.addEventListener('submit', function(eve) {
    eve.preventDefault();
    for (var i = 0; i < inputall.length; i++) {
        if (inputall[i].value.trim() === '') {
            h2.textContent = "Error, fill both fields";
            h2.style.color = "Green";
            break;
        }else{
            h2.textContent = '';
            h2.color = "black";
        }
        
    }
});
