var path = require('path');

exports.root = (req, res) => {
    res.status(200).send("root"); //回應HTTP StatusCode 「200」，HTTP body的文字為「root」
};

exports.index = (req, res) => {
    console.log(__dirname)
    console.log(path.resolve(''))
    res.sendFile(path.resolve(`templates/backstage.html`));
};