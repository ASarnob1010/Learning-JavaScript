{/* <div id="tabs">
        <div id="home" class="tab">Home</div>
        <div id="about" class="tab">About</div>
        <div id="content" class="tab">Content</div>
    </div>
    <h3 id="hometext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magni sapiente neque quia temporibus amet, a fugit itaque rem natus?</h3>
    <h3 id="abouttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel animi beatae molestias consequatur! Tempore, ipsa? Mollitia dignissimos sint in quidem dolore omnis! In, quae non? Ullam, nam nostrum. Nemo, praesentium.</h3>
    <h3 id="contenttext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus magnam, aliquid non suscipit, odit quasi ea ex sequi incidunt debitis necessitatibus id, nisi commodi eum? Quasi ipsam optio quidem molestias!</h3>
 */}
/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }
 
 body {
    padding: 20px;
 }
 
 html, body {
    width: 100%;
    height: 100%;
 }
 
 #tabs {
    display: flex;
    gap: 20px;
 }
 
 .tab {
    padding: 12px 22px;
    background-color: #c5bbbb;
    border: 2px solid #dadada;
    border-radius: 4px;
    font-weight: 700;
 }
 
 h3 {
    display: none;
    margin-top: 20px;
    width: 50%;
 } */
 
var home = document.querySelector('#home');
var about = document.querySelector('#about');
var content = document.querySelector('#content');
var hometext = document.querySelector('#hometext');
var abouttext = document.querySelector('#abouttext');
var contenttext = document.querySelector('#contenttext');

home.style.display = "initial"; 

home.addEventListener("click", function () {
    removetext();
    hometext.style.display = "block";
    hometext.style.width = "50%";
});

about.addEventListener("click", function () {
    removetext();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
});

content.addEventListener("click", function () {
    removetext();
    contenttext.style.display = "block";
    contenttext.style.width = "50%";
});

function removetext() {
    document.querySelectorAll("h3").forEach(function (h3) {
        h3.style.display = "none";
    });
}
