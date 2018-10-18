# webpack-sftp-upload-plugin
SFTP Upload Plugin for Webpack

## Installation
```bash
npm i -D sftp-upload-webpack
```

## Usage
add following code to your webpack config file.
```javascript
var WebpackSFTPUpload = require('webpack-sftp-upload-plugin');

new WebpackSFTPUpload({
    host: 'host',
    port: 'post', // default: 22
    username: 'user',
    privateKey: '/path/to/pem',
    targetPath: '/path/on/sftp/server'
    srcFile: '/local/path/to/file'
})            
```
