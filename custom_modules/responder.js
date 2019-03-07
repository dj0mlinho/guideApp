// "use strict";

function userLogin(req, res, mongooseModel) {

    mongooseModel.find({
        "username": req.body.username,
        "password": req.body.password
    })
    .then((docs) => {
        res.send(docs[0]);
    })
    .catch((err) => {
        res.send("An error occured while connecting to mongoDb, please try again.")
    });
}

function userRegistration(req, res, mongooseModel) {

    console.log(req.body);
    console.log(req.file);
    // check if username is already existing
}

module.exports.userLogin = userLogin;
module.exports.userRegistration = userRegistration;