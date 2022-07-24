<template>
    <h1 class="text-info my-4">
        アクセス環境表示ツール
    </h1>
    <p>
        アクセスされている環境を表示します。
        <br>
        <strong>
            サーバー側に情報は流出しません。
        </strong>
    </p>
    <noscript>
        <p class="plzusejs">
            このサイトでは<a href="https://w.wiki/3EDd">JavaScript</a>を使用しています。<br>
            当サイトのコンテンツを表示するには、JavaScriptを有効にしてください。
        </p>
    </noscript>
    <form mb="4" id="form">
        <input type="button" class="btn btn-outline-danger active" value="表示更新" onclick="Dainyu();">
    </form>
    <div class="out">
        <div id="1line"></div>
        <div id="ip"></div>
        <div id="accessfrom"></div>
        <div id="resolution"></div>
        <div id="browser"></div>
        <div id="os"></div>
        <div id="engine"></div>
        <div id="fordevua"></div>
    </div>
</template>

<script>
export default {
    name: CheckKun
}
</script>

