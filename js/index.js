/**
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
// 数値代入部分
const accessfrom = "アクセス元ページ:" + location.href;
const resolution = "解像度:" + screen.width + " x " + screen.height;
const browser = "ブラウザー: " + platform.name + " " + platform.version;
const os = "OS: " + " " + platform.os.family+ " " + platform.os.version;

window.onload = function onLoad() {
    document.getElementById("out1").innerHTML = accessfrom;
    document.getElementById("out2").innerHTML = resolution;
    document.getElementById("out3").innerHTML = browser;
    document.getElementById("out4").innerHTML = os
}
