var path = require('path');

var dest = './dest'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src); // 後々、つかいます

module.exports = {
  src: src,
  dest: dest,

  // 各タスクごとの設定をこの下に追加していく

  // jade
  jade: {
    src: [
      src + '/www/**/!(_)*.jade'
    ],
    dest: dest,
    options: {pretty: true}
  },

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: dest + '/js/bundle.js',  // uglify
    rename: 'bundle.min.js',
    options: {preserveComments: 'some'}
  },

  // coffee script
  coffee: {
    src: src + '/coffee/**',
    dest: src + '/js',
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/main.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js'] //js以外は拡張子を省略しない
    },
    debug: false,
    devtool: false,
    stats: {
      color: true,
      reasons: false
    },
  },

  // stylus
  stylus: {
    src: [
      src + '/styl/**/!(_)*'
    ],
    dest: dest + '/css/',
    output: 'style.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: dest + '/css/style.css',  //minifyするファイル
    rename: 'style.min.css',
  },

  // imagemin
  img: {
    src: src + '/img/**/*.+(jpg|jpeg|png|gif|svg)',
    dest: dest + '/img/',
    options: {
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }
  },

  // copy
  copy: {
    src: [
      src + '/www/**/*.!(jade)'
    ],
    dest: dest
  },

  // watch
  watch: {
   js: relativeSrcPath + '/js/**',
   styl: relativeSrcPath + '/styl/**',
   jade: relativeSrcPath + '/www/**',
   img: relativeSrcPath + '/img/**',
   www: relativeSrcPath + '/www/**'
 },
}
