// buttons
let htmlbtn = document.querySelector('.html-btn');
let cssbtn = document.querySelector('.css-btn');
let jsbtn = document.querySelector('.js-btn');

// texterea
let texth = document.getElementById('html');
let textc = document.getElementById('css');
let textj = document.getElementById('js');

// open && close
htmlbtn.onclick = function () {
    texth.style.display = 'block'
    textc.style.display = 'none'
    textj.style.display = 'none'
    this.style.borderLeft = "1px solid #8e44ad"
    this.style.borderTop = "1px solid #8e44ad"
    this.style.borderRight = "1px solid #8e44ad"
    cssbtn.style.border= 'none'
    jsbtn.style.border= 'none'
}

cssbtn.onclick = function () {
    textc.style.display = 'block'
    texth.style.display = 'none'
    textj.style.display = 'none'
    this.style.borderLeft = "1px solid #8e44ad"
    this.style.borderTop = "1px solid #8e44ad"
    this.style.borderRight = "1px solid #8e44ad"
    htmlbtn.style.border= 'none'
    jsbtn.style.border= 'none'
}

jsbtn.onclick = function () {
    textj.style.display = 'block'
    textc.style.display = 'none'
    texth.style.display = 'none'
    this.style.borderLeft = "1px solid #8e44ad"
    this.style.borderTop = "1px solid #8e44ad"
    this.style.borderRight = "1px solid #8e44ad"
    cssbtn.style.border= 'none'
    htmlbtn.style.border= 'none'
}


function run() {
    let htmlCode = document.querySelector("#html").value;
    let cssCode = "<style>"+document.querySelector("#css").value+"</style>";
    let jsCode = document.querySelector("#js").value;
    let output = document.querySelector("#output");
    output.contentDocument.body.innerHTML = htmlCode+cssCode ;
    output.contentWindow.eval(jsCode);
}
document.querySelector("#html").addEventListener("keyup",run);
document.querySelector("#css").addEventListener("keyup",run);
document.querySelector("#js").addEventListener("keyup", run);