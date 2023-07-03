<template>
<h2>コンソールログを二度と自分で書かない</h2>
<p>初心者の開発者であれ、長年の経験を積んだベテランの開発者であれ、JavaScriptのコードをデバッグするために<code class="language-plaintext highlighter-rouge">console.log</code>を使ったことがあるという事実は否定できないだろう。</p>
<p>それは悪いことではない。コードをデバッグするための素晴らしい方法だ。しかし、もう二度と<code class="language-plaintext highlighter-rouge">console.log</code>を書く必要はないと言ったらどうだろう？</p>
<p>最近、Turbo Console LogというVS Codeの拡張機能を見つけた。<span class="bold">キーボード・ショートカットを使って、面倒なコンソール・ステートメントをコードに挿入することができる。</span></p>
<p>使用するには、まずVS Codeエディターに拡張機能をインストールする必要があります。エクステンション・マーケットプレイスでエクステンションを検索してください。</p>
<p>または、こちらのURLからインストールしてください - <a href="//marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log">Turbo Console Log</a></p>
<p>一度インストールすれば、どんなJavaScriptファイルでも使うことができる。ログに記録したい変数や式を選択し、Ctrl + Alt + L</p>
<p>（macOSではCmd + option + L）を押して<code class="language-plaintext highlighter-rouge">console.log</code>文を挿入する必要がある。</p>
<p>この拡張機能は、選択された変数または式を含む次の行に、以下のフォーマットで<code class="language-plaintext highlighter-rouge">console.log</code>文を自動的に挿入する。</p>
<pre class="highlight"><code><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">🚀 ~ file: app.js:230 ~ event:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span>
</code><button type="button" id='copy' aria-label="Copy code to clipboard" @click='copyToClipboard()'>Copy</button></pre>
<p>おわかりのように、<code class="language-plaintext highlighter-rouge">console.log</code>文が挿入されるファイル名と行番号も追加される。ファイル名と行番号を手動で追加する必要がないので、これはかなり便利だ。</p>
<p>これがその動作だ。</p>
<div style="width: 1000px; height: 650px; top: 0px; left: 0px; background-image: url(&quot;//www.amitmerchant.com/images/turbo-console.log.gif&quot;);"></div>
<br>
<p>これはデフォルトの動作だが、いくつかの設定を変更することでカスタマイズできる。例えば、ログメッセージのフォーマット、ログメッセージのプレフィックス、挿入したいログ文のタイプ</p>
<p>（<code class="language-plaintext highlighter-rouge">console.log</code>&nbsp;、<code class="language-plaintext highlighter-rouge">console.error</code>&nbsp;、<code class="language-plaintext highlighter-rouge">console.warn</code>&nbsp;など）をカスタマイズできます。</p>
<br>
</template>

<script setup>
function copyToClipboard () {
     navigator.clipboard.writeText('console.log("🚀 ~ file: app.js:230 ~ event:", event)')
     .then(function () {
      document.getElementById('copy').innerText = 'Copied';
    })  
}

</script>

<style>

*{
    font-family: 'Calling Code', 'Yu Gothic UI', monospace;
}
code.highlighter-rouge {
    background-color: #efefef;
    position: relative;
    top: -2px;
    left: 2px;
    font-size: 14px;
    box-shadow: 0 2px 0 #d6d6d6;
    padding: 2px 8px 2px;
    font-weight: bold;
}
.highlighter-rouge {
    color: #5b5be0;
    padding: 2px 4px;
    border-radius: 8px;
    font-size: 16px;
}
p{
    font-size: 18px;
    line-height: 1;
}
h2{
    font-size: 22px;
}

.bold{
    font-weight: 800;
}
a:hover, a:active {
    color: #3c3a57;
    font-size: 16px;
}
a {
    color: #5f40f6;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    transition: color .2s ease-out,opacity .2s ease-out;
}
#copy:hover {
    opacity: 1;
}

.highlighter-rouge {
    color: #5b5be0;
    padding: 2px 4px;
    border-radius: 8px;
    font-size: 16px;
}
div.highlight {
    position: relative;
}
.highlight {
    background-color: #1e1c3f;
    padding: 8px 4px 4px 8px;
    overflow: auto;
    font-size: 100%;
    border-radius: 10px;
    width: 545px;
    height: 35px;
    color: #f8f8f2;
}
code {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    color: #d8d8d8;
    font-weight: bold;
}

#copy {
    position: absolute;
    right: 58rem;
    top: 28rem;
    opacity: 0;
    display: inline-block;
    height: 30px;
    padding: 0 13px;
    color: #1f1e1e;
    text-align: center;
    font-size: 8px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: #c6ff83;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
}
</style>