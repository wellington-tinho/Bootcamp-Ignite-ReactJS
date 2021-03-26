const path = require('path');

module.exports = {
  mode: 'development', // Aponta para o Webpack qual o modo deverá ser utilizado para compilar os arquivos
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Arquivo de entrada que o webpack irá buscar
  output: {
    path: path.resolve(__dirname, 'dist'), // Path da pasta destino com o código convertido pelo webpack
    filename: 'bundle.js' // Nome do arquivo destino com o código convertido pelo webpack
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensões que o webpack irá aceitar (necessário pois estamos utilizando arquivos .jsx)
  },
  module: { // Configurações para dizer ao webpack como se comportar para cada tipo de arquivo (.js, .png, etc)
    rules: [ // Array de objetos contendo as regras para cada module
      {
        test: /\.jsx$/, // Recebe um RegEx para testar se o arquivo é da extensão que queremos
        exclude: /node_modules/, // Arquivos que serão ignorados na compilação desta regra
        use: 'babel-loader' // Loader do Babel para compilar os arquivos JavaScript
      }
    ],
  }
}