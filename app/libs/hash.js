const crypto = require('crypto');

module.exports = {
    md5(string) {
        return crypto.createHash('md5')
            .update(string)
            .digest('hex');
    },
    sha256(string) {
        return crypto.createHash('sha256')
            .update(string)
            .digest('hex');
    },
    sha512(string) {
        return crypto.createHash('sha512')
            .update(string)
            .digest('hex');
    },
    sha1(string) {
        return crypto.createHash('sha1')
            .update(string)
            .digest('hex');
    },
    rmd160(string) {
        return crypto.createHash('rmd160')
            .update(string)
            .digest('hex');
    },
};
