const sftp = require("sftp-node");

class WebpackSFTP {
    constructor(options = {}) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.compile.tap("done", compilation => {
            const options = this.options;
            sftp.upload(options, this.options.targetPath, this.options.srcFile, (err, res) => {
                if(err) console.log(`Error: ${err}`);
                else {
                    console.log("File uploaded successfully");
                }
            });
        });
    }
}

module.exports = WebpackSFTP;
