let accessfrom = "アクセス元ページ:" + location.href;
let resolution = "解像度:" + screen.width + "x" + screen.height;

window.onload = function onLoad() {
    document.getElementById("out1").innerHTML = accessfrom;
    document.getElementById("out2").innerHTML = resolution;
}
