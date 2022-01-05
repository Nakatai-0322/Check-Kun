const accessfrom = "アクセス元ページ:" + location.href;
const resolution = "解像度:" + screen.width + " x " + screen.height;
const browser = "ブラウザー: " + window.navigator.userAgent + "   (ver." + window.navigator.appVersion + " )"

window.onload = function onLoad() {
    document.getElementById("out1").innerHTML = accessfrom;
    document.getElementById("out2").innerHTML = resolution;
    document.getElementById("out3").innerHTML = browser;
}
