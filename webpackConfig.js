const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
        new CopyWebpackPlugin([
            { from: './node_modules/@fortawesome/fontawesome-free/webfonts', to: './webfonts'}
        ])
    ]
}