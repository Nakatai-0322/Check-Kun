/*
Check-Kun

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
import("./lib/platform.js")

// ページロード時に"out*"に対し代入
window.onload = function onLoad() {
    document.getElementById("accessfrom").innerHTML = location.href;
    document.getElementById("resolution").innerHTML = screen.width + " x " + screen.height;
    document.getElementById("browser").innerHTML = platform.version;
    document.getElementById("os").innerHTML = platform.os;
}
