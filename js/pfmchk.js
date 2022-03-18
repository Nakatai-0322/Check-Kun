/*
Check-Kun

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
let rawip = "IPアドレスがまだ取得されていないか、取得できない状態にあります。"

function callback(data) {
    rawip = data.ip
}

window.addEventListener('load', Dainyu);

function Dainyu() {
    const ip = `IPアドレス: <code>${rawip}</code>`;
    const accessfrom = `アクセス元ページ: <code>${location.href}</code>`;
    const resolution = `解像度: <code>${screen.width} x ${screen.height}</code>`;
    const browser = `ブラウザ: <code>${platform.name} ${platform.version}</code>`;
    const engine = `HTMLレンダリングエンジン: <code>${platform.layout}</code>`;
    const os = `OS: <code>${platform.os.toString()}</code>`;
    const fordevua = `ユーザーエージェント（開発者向け）: <code>${platform.ua}</code>`;

    document.getElementById("ip").innerHTML = ip;
    document.getElementById("accessfrom").innerHTML = accessfrom;
    document.getElementById("resolution").innerHTML = resolution;
    document.getElementById("browser").innerHTML = browser;
    document.getElementById("os").innerHTML = os;
    document.getElementById("engine").innerHTML = engine;
    document.getElementById("fordevua").innerHTML = fordevua;
};
