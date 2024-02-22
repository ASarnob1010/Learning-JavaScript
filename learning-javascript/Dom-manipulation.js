//Dom manipulation is changing webpage by using js
/* var btn = document.querySelector(".abcd");
btn.textContent += " starting in 3 seconds";

var inner = document.querySelector("#123");
inner.innerHTML = '<i>inner html</i>';

var htwo = document.querySelector("h2");
htwo.style.color = 'red';
htwo.style.fontFamily= "gilroy"; */

/* var img = document.createElement("img")
img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fcollections%2F2530441%2Fbackgrounds-and-textures&psig=AOvVaw0xdo35LBvPiyksrZhCyzbC&ust=1708450624962000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiN1dj4t4QDFQAAAAAdAAAAABAR';
document.querySelector("body").appendChild(img); */

/* var btn = document.querySelector('button')
btn.addEventListener("click",function(){
          alert('get the funck out of here');
}) 
 */
var btn = document.querySelector('button')
btn.addEventListener("mouseover",function(){
         btn.textContent = "starting....";
         btn.style.backgroundColor = "red";
});

var btn = document.querySelector('button')
btn.addEventListener("mouseleave",function(){
         btn.textContent = "make new card ";
         btn.style.backgroundColor = "#fff";
}) 