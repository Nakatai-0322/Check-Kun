let accessfrom = "アクセス元ページ:" + location.href;
let resolution = "解像度:" + screen.width + "x" + screen.height;

window.onload = function onLoad() {
    target = document.getElementById("out1");
    target.innerHTML = accessfrom;
}
