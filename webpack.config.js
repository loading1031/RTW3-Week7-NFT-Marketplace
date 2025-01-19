const path = require('path');

module.exports = {
  entry: './src/index.js', // 엔트리 파일
  output: {
    path: path.resolve(__dirname, 'dist'), // 출력 디렉토리
    filename: 'bundle.js', // 출력 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 파일을 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel을 사용하여 트랜스파일링
        },
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      // "vm": require.resolve("vm-browserify"), // Polyfill 설정
        "vm": false,
    },
  },
  devServer: {
    static: './public', // 개발 서버의 정적 파일 디렉토리
    hot: true,
  },
};
