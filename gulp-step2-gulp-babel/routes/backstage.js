var path = require('path');

exports.root = (req, res) => {
    res.status(200).send("root"); //回應HTTP StatusCode 「200」，HTTP body的文字為「root」
};

exports.index = (req, res) => {
    res.sendFile(path.resolve(`templates/backstage.html`)); //回傳backstage.html檔案
};
