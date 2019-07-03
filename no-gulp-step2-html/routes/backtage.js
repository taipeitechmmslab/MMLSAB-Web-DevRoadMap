var request = require('request');
var path = require('path');

exports.index = (req, res) => {
    res.sendFile(path.resolve(`templates/backstage.html`));
};