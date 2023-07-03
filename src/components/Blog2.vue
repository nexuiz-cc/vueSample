<template>
  <br />
  <h2 id="title">MDN プレイグラウンドの紹介: コードに命を吹き込みましょう!</h2>
  <p class="p">
    Mozilla では、Web 開発者に力を与え、Web 上で素晴らしいエクスペリエンスを生み出すための最高のリソースを提供するよう常に努力しています。</p>
  <p class="p">本日、MDNへの画期的な追加、MDN プレイグラウンドを発表できることを嬉しく思います。（はい、わかりました。これは少し刺激的すぎるように聞こえるかもしれません）。</p>
  <h2>
    <a href="#title">
      <font>
        目次
      </font>
    </a>
    <li>
      <RouterLink to="#what_is_the_mdn_playground">
        <font>
          MDN プレイグラウンドとは何ですか?
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#why_the_mdn_playground">
        <font>
          MDN プレイグラウンドを選ぶ理由
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#key_features_of_the_mdn_playground">
        <font>
          MDN プレイグラウンドの主な機能
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#how_to_access_the_mdn_playground">
        <font>
          MDN プレイグラウンドへのアクセス方法
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#join_the_community">
        <font>
          コミュニティに参加する
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#conclusion">
        <font>
          結論
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#demos">
        <font>
          デモ
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#under_the_hood">
        <font>
          フードの下
        </font>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#whats_next">
        <font>
          次は何ですか
        </font>
      </RouterLink>
    </li>
  </h2>
  <h2 id="what_is_the_mdn_playground">MDN プレイグラウンドとは何ですか?</h2>
  <p>MDN プレイグラウンドは、HTML、CSS、JavaScript をプレビューする簡単な方法であり、皆さんが期待しているものとほぼ同じです。</p>
  <p>現時点では、基本的なほとんどをカバーしています。基本的なオートコンプリート、唯一のより美しいフォーマット、</p>
  <p>そして素晴らしい作品を共有するオプション (ログインしている場合) などです。</p>
  <h2 id="why_the_mdn_playground">なぜ MDN プレイグラウンドなのか?</h2>
  <p>これは良い質問です。周りには遊び場がたくさんあるのに、なぜ別の遊び場があるのでしょうか？そうですね、理論的には、プレイグラウンドの構築はそれほど複雑ではありません (ここでは理論がem重要です)。私たちはそれを MDN
    と統合したいと考えていました。そこで私たちは、有名な最後の言葉を一つ書いてみてはどうかと考えました。</p>
  <p>冗談はさておき、MDN
    に遊び場を設けるというアイデアはずっと浮かんでいました。記事にインタラクティブな例を含めることは素晴らしいスタートでしたが、一部のものにはより多くのスペースとより多くの自由が必要です。アイデアやソリューションを共有することが重要であり、これは第三者の経験であってはなりません。しかし、小さな変革のように感じられたことの
    1 つは、既存のライブ サンプルとの統合でした。</p>
  <p>PlayMDN 上の既存のライブ サンプルをプレイグラウンドに分割できるようになりました (ライブ
    サンプルの上にある小さなボタンを探してください)。これにより、読んだばかりのコードに変更を加えることができるようになり、何が起こっているかをよりよく理解したり、カスタマイズしたバージョンを友達に送信したりするのに役立ちます。まだ迷子にならないでください。リミックスできるこのランダムなアニメーションの例を確認してください。
  </p>
<div class="code-example">
<span class="html" >HTML</span><a href="" class="span">遊ぶ</a><button @click="" class="btnc">copy</button></div>
<div class="code-content"><code><span class="token tag"><span class="token tag"><span class="token punctuation" id="h1">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello MDN Playground<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></div>
<br>


</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
li {
  line-height: 1.5;
  margin-left: 15px;
}

p {
  margin-left: 20px;
  width: 1200px;
}
.code-example{
  width: 600px;
  height: 38px;
  background-color: gray;
  margin-left: 15px;
  border-bottom: #1f1e1e 2px solid;
}
.token.tag{
  color: #c6ff83;
}
.span{
  margin-left: 380px;
  color: #fff;
  font-size: 22px;
}
.btnc{
  margin-left: 510px;
    position: relative;
    top:-36px;
    opacity: 1;
    display: inline-block;
    height: 30px;
    padding: 0 13px;
    color: #1f1e1e;
    text-align: center;
    font-size: 22px;
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

.html{
  font-size: 25px;
  margin-left: 10px;
  
}
 #h1{
  margin-left: 25px;
 }

 .code-content{
  width: 600px;
  height: 50px;
  background-color: gray;
  margin-left: 15px;
  padding-top: 10px 10px;
 }
code{
  color: #fff;
  font-size: 20px;
  margin-left: 5px;
}
</style>
