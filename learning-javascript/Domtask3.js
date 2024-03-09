//build a countdown timer that starts when button is clicked and updates the 
//display in real time

{/* <h3>0</h3>
<button id="start">start</button>
<button id="stop">stop</button>
<script src="Domtask3.js"> */
    
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var h3 = document.querySelector('h3'); 
var int;

var start = start.addEventListener("click",function(){
var count = 0;//accept a callback , timer
int = setInterval(function(){
 h3.textContent = count;
count++;
},1000);   //proti 1000 ms e ekbar cholbe;
})

var stop = stop.addEventListener("click",function(){
    clearInterval(int);
    })
