/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
// 数値代入部分
const accessfrom = "アクセス元ページ: " + location.href;
const resolution = "解像度:" + screen.width + " x " + screen.height;
const browser = "ブラウザー: " + platform.name + " " + platform.version;
const os = "OS: " + platform.os.family+ " " + platform.os.version;

// ページロード時に"out*"に対し代入
window.onload = function onLoad() {
    document.getElementById("accessfrom").innerHTML = accessfrom;
    document.getElementById("resolution").innerHTML = resolution;
    document.getElementById("browser").innerHTML = browser;
    document.getElementById("os").innerHTML = os
}
