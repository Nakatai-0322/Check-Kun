/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
// 数値代入部分
const accessfrom = location.href;
const resolution = screen.width + " x " + screen.height;
const browser = platform.name + " " + platform.version;
const os = platform.os.family+ " " + platform.os.version;

// ページロード時に"out*"に対し代入
window.onload = function onLoad() {
    document.getElementById("accessfrom").innerHTML = accessfrom;
    document.getElementById("resolution").innerHTML = resolution;
    document.getElementById("browser").innerHTML = browser;
    document.getElementById("os").innerHTML = os
}
