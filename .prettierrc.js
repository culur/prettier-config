let config;

try {
    config = require('./build');
} catch {
    config = {};
}

module.exports = config;
