#project 1

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hvxzaa?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css)


## source code html & css

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Color Scheme Switcher</title>
  <style>
    html {
      margin: 0;
    }

    span {
      display: block;
    }

    .canvas {
      margin: 100px auto 100px;
      width: 80%;
      text-align: center;
    }

    .button {
      width: 100px;
      height: 100px;
      border: solid black 2px;
      display: inline-block;
      cursor: pointer;
    }

    #grey {
      background: grey;
    }

    #white {
      background: white;
    }

    #blue {
      background: blue;
    }

    #yellow {
      background: yellow;
    }
  </style>
</head>
<body>
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode">Youtube channel</a>
  </nav>
  <div class="canvas">
    <h1>Color Scheme Switcher</h1>
    <span class="button" id="grey"></span>
   
```


## source code javascript


``` javascript
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});


```

