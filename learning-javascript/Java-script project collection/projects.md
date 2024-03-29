#project 1

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hvxzaa?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css)


## source code 

```html <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript Background Color Switcher</title>
    <style>
        html {
            margin: 0;
        }

        span {
            display: block;
            border-radius: 15px;
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
            /* Add cursor pointer to indicate clickable */
        }

        /* Define background colors for each button */
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
        #green{
            background: green;
        }
        #purple{
            background: purple;
        }
    </style>

</head>

<body>
    <nav>
        <a href="/" aria-current="page"></a>
        <a target="_blank" href=""></a>
    </nav>
    <div class="canvas">
        <h1>Color Scheme Switcher</h1>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
        <span class="button" id="green"></span>
        <span class="button" id="purple"></span>
        <h2>Try clicking on one of the colors above <span>to change the background color of this page!</span></h2>
    </div>
    <script>
        const buttons = document.querySelectorAll('.button'); // Corrected selector
        const body = document.querySelector('body');

        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                body.style.backgroundColor = e.target.id; // Set background color based on button's id
            });
        });

    </script>
</body>

</html>

```

# project 2
 
## source code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="style.css" />
  <title>BMI Calculator</title>
  <style>
    html {
      margin: 0;
    }

    span {
      display: block;
    }
    .container {
      margin: 100px auto 100px;
      width: 80%;
      text-align: center;
    }

    button {
      width: 100px;
      height: 30px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    #results {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="">Youtube channel</a>
  </nav>
  <div class="container">
    <h1>BMI Calculator</h1>
    <form>
      <p><label>Height in CM: </label><input type="text" id="height" /></p>
      <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
      <button>Calculate</button>
      <div id="results"></div>
      <div id="weight-guide">
        <h3>BMI Weight Guide</h3>
        <p>Under Weight = Less than 18.6</p>
        <p>Normal Range = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
      </div>
    </form>
  </div>
  <script src="chaiaurcode.js"></script>
  <script>
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const height = parseInt(document.querySelector('#height').value);
      const weight = parseInt(document.querySelector('#weight').value);
      const result = document.querySelector('#results');
      
      if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height";
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight";
      } else {
        const bmi = weight / ((height / 100) * (height / 100)); // Convert height to meters
        result.innerHTML = `<span>BMI: ${bmi.toFixed(2)}</span>`; // Display BMI value with two decimal places
      }
    });
  </script>
</body>
</html>

```
