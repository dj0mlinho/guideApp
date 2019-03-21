// "use strict";

function userLogin(req, res, mongooseModel) {

    mongooseModel.find({
        "email": req.body.email,
        "password": req.body.password
    })
    .then((data) => {
        if (data.length) {
            res.send(data);
        } else {
            res.send("Pogresna lozinka i/ili e-mail adresa.");
        }
    })
    .catch((err) => {
        res.send("Doslo je do greske prilikom povezivanja sa bazom podataka, molimo Vas pokusajte ponovo.");
    });
}



function userRegistration(req, res, mongooseModel) {
    // check if email already exists 
    mongooseModel.find({
        "email": req.body.email
    })
    .then((data) => {
        if (data.length) {
            res.send("E-mail adresa koju ste uneli je vec u upotrebi");
        } else {
            // check if telephone number already exists
            mongooseModel.find({
                "telephone": req.body.telephone
            })
            .then((data) => {
                if (data.length) {
                    res.send("Telefonski broj koji ste uneli je vec u upotrebi");
                } else {
                    // check if licence number already exists
                    mongooseModel.find({
                        "licenceNum": req.body.licenceNum
                    })
                    .then((data) => {
                        if (data.length) {
                            res.send("Broj licence koji ste uneli je vec u upotrebi");
                        } else {
                            // everything is ok, save new user
                            let newUser = new mongooseModel(req.body);
                            newUser.save()
                                .then((data) => {
                                    res.send(data);
                                })
                                .catch((err) => {
                                    res.send("Doslo je do greske prilikom povezivanja sa bazom podataka, molimo Vas pokusajte ponovo.");
                                });
                        }
                    })
                    .catch((err) => {
                        res.send("Doslo je do greske prilikom povezivanja sa bazom podataka, molimo Vas pokusajte ponovo.");
                    });
                }
            })
            .catch((err) => {
                res.send("Doslo je do greske prilikom povezivanja sa bazom podataka, molimo Vas pokusajte ponovo.");
            });
        }
    })
    .catch((err) => {
         res.send("Doslo je do greske prilikom povezivanja sa bazom podataka, molimo Vas pokusajte ponovo.");
    });
}

module.exports.userLogin = userLogin;
module.exports.userRegistration = userRegistration;