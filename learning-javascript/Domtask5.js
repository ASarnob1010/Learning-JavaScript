{/* <div id="main">
<div class="container">
    <input type="text" placeholder="search..">
    <div class="people">
        
    </div>
</div>
</div> */}
var input = document.querySelector("input");
var data = [
    { name: "Arnob", src: "https://images.unsplash.com/photo-1508978644997-53cc5bfb8a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvdHJhaXR8ZW58MHx8MHx8fDA%3D" },
    { name: "Arnab", src: "https://media.istockphoto.com/id/1485418002/photo/asian-chinese-parents-and-baby-boy-looking-at-camera-smiling-in-public-park-during-weekend.webp?b=1&s=170667a&w=0&k=20&c=mnO4s5VNXpV31wYawnvkr_yH_aqsnKCrBeg9SRy8-WI=" },
    { name: "Arunab", src: "https://media.istockphoto.com/id/868669716/photo/taking-a-break.jpg?s=612x612&w=0&k=20&c=CX7mw9Ilbw_z83rMvUrWUkQO-FtZB2syAq2JNwt5TRM=" },
    { name: "My queen", src: "https://media.istockphoto.com/id/613250324/photo/father-and-his-son-doing-arm-wrestling-on-table.jpg?s=1024x1024&w=is&k=20&c=JfErLKYbYFRbkT2Hlm0P2cgwdorEiMJJmw-WfJJ1B3w=" }
];
var initialHtml = "";
data.forEach(function (elem) {
    initialHtml += `<div class="person">
    <div class="img">
        <img src="${elem.src}">
    </div>
    <h3>${elem.name}</h3>
</div>`;
});
document.querySelector(".people").innerHTML = initialHtml;

input.addEventListener("input", function () {
    var searchValue = input.value.trim().toLowerCase(); // Trim input and convert to lowercase for case-insensitive search
    var matching = data.filter(function (e) {
        return e.name.toLowerCase().startsWith(searchValue);
    });

    var newHtml = "";
    matching.forEach(function (elem) {
        newHtml += `<div class="person">
    <div class="img">
        <img src="${elem.src}">
    </div>
    <h3>${elem.name}</h3>
</div>`;
    });

    document.querySelector(".people").innerHTML = newHtml;
});
