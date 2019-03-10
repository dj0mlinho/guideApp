// "use strict";

function userLogin(req, res, mongooseModel) {

    console.log(req.body)
    mongooseModel.find({
        "fullName": req.body.fullName,
        "password": req.body.password
    })
    .then((docs) => {
        if (docs[0]) {
            res.send(docs[0]);
        } else {
            res.send("Wrong username and/or password, please try again.");
        }
    })
    .catch((err) => {
        res.send("An error occured while connecting to mongoDb, please try again.");
    });
}

function userRegistration(req, res, mongooseModel) {

    console.log(req.body);
    console.log(req.file);
    res.send("ok");
}

module.exports.userLogin = userLogin;
module.exports.userRegistration = userRegistration;