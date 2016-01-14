# gulp-jade-stylus-webpack
gulpをつかったJadeとStylusを利用したフロントエンド開発環境。

## 考えたこと
・Webpackを使用してjsをビルドするように。

・cssはStylusで記述するように。

・ファイルの変更を監視して自動的にビルドさせる。

・画像をminifyする。

・画像の変更追加を監視して、minifyする。

・ファイルに変更があった場合、自動的にブラウザをリロードさせる。

・cssファイルとjsファイルをminifyする際に、オリジナルとminifyしたファイルの２つを作成するようにする。

## 使用したモジュール
  ・gulp-watch
  ファイル監視用。最初からgulpに搭載されている。

  ・gulp-webserver
  開発用のWebサーバーを簡単に立ち上げることができる。指定したGlobを監視してリロードしてくれる。

  ・require-dir
  タスク毎にファイルを分割する。ディレクトリ内のjavascript、jsonファイルを自動で読み込んでくれる。

  ・gulp-plumber
  Stream中に起こるのエラーが原因でタスクが強制停止することを防止するモジュール。watch中にエラーが発生するとwatch自体が停止してしまうため、これを防止するために使う。

  ・gulp-if
  条件をつけて、タスクを実行させることができるようになる。

  ・gulp-stylus
  stylusのコンパイルに使用する。

  ・gulp-concat
  ファイルを一つにまとめることができる。

  ・gulp-autoprefixer
  ベンタープレフィクスの付与を自動化する。

  ・gulp-minify-css
  CSSファイルをminifyする。

  ・nib
  Stylus用のCSS3機能拡張ライブラリ。SassでいうCompassみたいなもの。

  ・gulp-imagemin
  GIF,JPEG,PNG,SVGをロスレスで軽量化できる。

  ・gulp-changed
  srcとdestをチェックして変更されたファイルだけをStreamに流します。

  ・gulp-uglify
  javascriptファイルをminifyする。

  ・gulp-webpack
  依存関係を簡単に解決してくれる。

## 使用するタスク
  ・build
  destディレクトリにビルド。jade、stylus、webpackのコンパイル。imageminによる画像の軽量化。copyで必要ファイルのコピー。

  ・copy
  srcディレクトリのwwwディレクトリ内にある.jadeファイル以外をdestディレクトリ直下にコピーする。

  ・default
  gulpが実行された際に、動作させるタスクをまとめられている。

  ・jade
  jadeファイルをhtmlファイルへコンパイルする。

  ・stylus
  stylusファイルをcssへコンパイルする。

  ・watch
  指定されたファイルに更新がないか監視する。

  ・webpack
  パッケージの依存関係をチェックし、解決する。

  ・webserver
  Webサーバを実行する。

  ・imagemin
  指定された画像を軽量化する。
