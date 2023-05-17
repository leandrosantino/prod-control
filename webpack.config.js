const path = require('path');
const nopdeExternals = require('webpack-node-externals')
const tsconfigPaths = require('tsconfig-paths-webpack-plugin')
const mode = /production/.test(String(process.env.NODE_ENV)) ? 'production' : 'development'

console.log(mode)

module.exports = {
  mode,
  entry: {
    index: {
      import: './server/index.ts',
    },
  },
  target: 'node',
  externals: [
    function ({ request }, callback) {
      if (request.includes('../database/client')) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
    nopdeExternals()
  ],
  externalsPresets: {
    node: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: { loader: 'ts-loader', options: { configFile: 'tsconfig.node.json' } },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new tsconfigPaths({ baseUrl: './' })
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
};
