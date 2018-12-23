const path = require('path')

module.exports = {
  // Tell the server where to serve static content from.
  contentBase: path.join(process.cwd(), 'public'),
  // By default files from `contentBase` will not trigger a page reload.
  watchContentBase: true,
  // Open a web browser.
  open: true,
  // Overlay errors in the browser
  overlay: true,
  // Enable gzip compression of generated files.
  compress: true,
  // Port to view dev env (localhost:3010)
  port: 8000,
  // Silence WebpackDevServer's own logs since they're generally not useful.
  // It will still show compile warnings and errors with this setting.
  clientLogLevel: 'none',
  // Show less info in the terminal (errors only)
  stats: "errors-only",
  // Reportedly, this avoids CPU overload on some systems.
  // https://github.com/facebookincubator/create-react-app/issues/293
  watchOptions: {
    ignored: /node_modules/,
  },
  // Since development mode thinks of Webpack DevServer as the place to get index.html
  // instead of a file system or a Node backend, we need to tell DevServer to always
  // serve index.html for refreshes since we have an SPA
  historyApiFallback: true
}
