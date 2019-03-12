"use strict";

angular.module("guideApp")  
    .factory("validator", () => {

        return {
            
            registrationCheck: (userData) => {
                const nameRegExp = /^[A-z]*$/igm;
                const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]{3,33}\.[a-zA-Z0-9]{2,22}$/igm;
                const telephoneRegExp = /^[0-9/-]{9,15}$/igm;
                const licenceNumRegExp = /^[0-9]{5}$/igm;
                // error class: error message
                let err = [];
                let prop;
                for (prop in userData) {
                    switch (prop) {

                        case "firstName":
                            if (!userData["firstName"]) {
                                err.push({
                                    "firstName": "Unos imena je obavezan."
                                });
                            } else {
                                if (!nameRegExp.test(userData["firstName"])) {
                                    err.push({
                                        "firstName": "Vase ime sme da sadrzi samo slova."
                                    });
                                }
                            }
                            break;
                        case "lastName":
                            if (!userData["lastName"]) {
                                err.push({
                                    "lastName": "Unos prezimena je obavezan."
                                });
                            } else {
                                if (!nameRegExp.test(userData["lastName"])) {
                                    err.push({
                                        "lastName": "Vase prezime sme da sadrzi samo slova."
                                    });
                                }
                            }
                            break;
                        case "password":
                            if (!userData["password"]) {
                                err.push({
                                    "password": "Unos lozinke je obavezan."
                                });
                            } else {
                                if (userData["password"].length < 8) {
                                    err.push({
                                        "password": "Lozinka mora da sadrzi minimum 8 karaktera."
                                    });
                                }
                            }
                            break;
                        case "email":
                            if (!userData["email"]) {
                                err.push({
                                    "email": "Unos e-mail adrese je obavezan."
                                });
                            } else {
                                if (!emailRegExp.test(userData["email"])) {
                                    err.push({
                                        "email": "Format vase e-mail adrese je pogresan."
                                    });
                                }
                            }
                            break;
                        case "telephone":
                            if (!userData["telephone"]) {
                                err.push({
                                    "telephone": "Unos telefonskog broja je obavezan."
                                });
                            } else {
                                if (!telephoneRegExp.test(userData["telephone"])) {
                                    err.push({
                                        "telephone": "Format vaseg telefonskog broja je pogresan."
                                    });
                                }
                            }
                            break;
                        case "licenceNum":
                            if (!userData["licenceNum"]) {
                                err.push({
                                    "licenceNum": "Unos broja licence je obavezan."
                                });
                            } else {
                                if (!licenceNumRegExp.test(userData["telephone"])) {
                                    err.push({
                                        "licenceNum": "Format vaseg broja licence je pogresan."
                                    });
                                }
                            }
                            break;
                        case "destinations":
                            if (!userData["destinations"].length) {
                                err.push({
                                    "destinations": "Morate odabrati makar jednu destinaciju."
                                });
                            }                                
                        default:
                            break;    
                    }
                }
                console.log(err);
            }
        };
    });