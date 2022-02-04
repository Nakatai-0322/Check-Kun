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
    const accessfrom = "アクセス元ページ: " + "<code>" + location.href + "</code>";
    const resolution = "解像度: " + "<code>" + screen.width + " x " + screen.height + "</code>";
    const browser = "ブラウザ: " + "<code>" + platform.name + " " + platform.version + "</code>";
    const engine = "HTMLレンダリングエンジン: " + "<code>" + platform.layout + "</code>";
    const os = "OS: " + "<code>" + platform.os.family + " " + platform.os.version + "</code>";
    const fordevua = "ユーザーエージェント（開発者向け）: " + "<code>" + platform.ua + "</code>";

    document.getElementById("accessfrom").innerHTML = accessfrom;
    document.getElementById("resolution").innerHTML = resolution;
    document.getElementById("browser").innerHTML = browser;
    document.getElementById("os").innerHTML = os;
    document.getElementById("engine").innerHTML = engine;
    document.getElementById("fordevua").innerHTML = fordevua;
}

document.getElementById('copyua').addEventListener('click', function(e) {
    copy_to_clipboard(fordevua);
});
