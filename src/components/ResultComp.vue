<template>
	<div>
		<a href="/">
			<h1 class="text-info my-4">アクセス環境表示ツール</h1>
		</a>
		<p>
			アクセスされている環境を表示します。
			<br />
			<strong> サーバー側に情報は流出しません。 </strong>
		</p>
		<form mb="4" id="form">
			<input
				type="button"
				class="btn btn-outline-danger active"
				value="表示更新"
				onclick="Dainyu();"
			/>
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
		<footer>
			Create by <a href="https://nakatai.xyz">Nakatai</a>.<br />
			This software used
			<a href="https://github.com/bestiejs/platform.js"> platform.js </a>
			&nbsp;,&nbsp;
			<a href="https://getbootstrap.jp/"> bootstrap </a>&nbsp;and&nbsp;
			<a href="https://ipinfo.io/"> ipinfo.io </a>.
			<br />
			<a href="https://github.com/Nakatai-0322/Check-Kun">
				GitHub Source </a
			>&nbsp;/&nbsp;
			<a href="https://github.com/Nakatai-0322/Check-Kun/issues">
				Issue </a
			><br />
			<a
				href="https://github.com/Nakatai-0322/Check-Kun/actions/workflows/pages/pages-build-deployment"
			>
				<img
					src="//github.com/Nakatai-0322/Check-Kun/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main"
					alt="ビルド状況のバッジ"
				/>
			</a>
		</footer>
	</div>
</template>
