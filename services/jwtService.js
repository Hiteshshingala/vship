const jwt = require('jsonwebtoken');

module.exports = {
    signToken: function (data) {
        console.log('aa', process.env.JWT_SECRET_KEY);
        return jwt.sign(data, process.env.JWT_SECRET_KEY ,{ expiresIn: '24h'});
    }
}