/*
Check-Kun

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
//"platform.js"をインポート
import("./lib/platform.js")

//ページロード時に各部分に対し代入
window.onload = function onLoad() {
    const accessfrom = "アクセス元ページ: " + location.href;
    const resolution = "解像度: " + screen.width + " x " + screen.height;
    const browser = "ブラウザ: " + platform.name + " " + platform.version;
    const engine = "HTMLレンダリングエンジン: " + platform.layout;
    const os = "OS: " + platform.os;

    document.getElementById("accessfrom").innerHTML = accessfrom;
    document.getElementById("resolution").innerHTML = resolution;
    document.getElementById("browser").innerHTML = browser;
    document.getElementById("os").innerHTML = os;
    document.getElementById("engine").innerHTML = engine;
}
