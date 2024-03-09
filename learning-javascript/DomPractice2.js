
//task 
//create an unordered list allow users to add and remove list items dynamically
//by using button

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>practice js</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <ul>
        <li>apple</li>
    </ul>
    <input type="text" placeholder="add-users">
    <button id="add">add</button>
    <button id="remove">remove</button>
    <script src="DomPractice2.js">
    </script>
</body>
</html> */

var add = document.querySelector('#add');
var remove = document.querySelector('#remove');
var inp = document.querySelector("input");
var ul = document.querySelector('ul');

var li; // Declare li as a global variable

add.addEventListener("click", function () {
    if (inp.value.trim() === '') {
        // jodi kono input na pore;
    } else {
        li = document.createElement('li'); // Remove 'var' to use the global variable
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = "";
    }
});

remove.addEventListener("click", function () {
   ul.removeChild(li);
});
