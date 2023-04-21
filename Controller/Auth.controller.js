const User = require('../Model/User.mysql');
const bcrypt = require('bcrypt');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const {expressjwt} = require("express-jwt");
const secret = "secret"

exports.login = async function(req, res) {
    const token = jsonwebtoken.sign({
        email: req.body.email
    }, secret, {
        expiresIn: '3h'
    })

    console.log("token", token)
    // Comparer le password avec celui de la base de données (bcrypt)
    let passwordIsOk;
    await User.getPwd(req.body.email, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }
        passwordIsOk = await bcrypt.compare(req.body.password, data.password);
        console.log("passwordIsOk", passwordIsOk)
        if (passwordIsOk) {
            await User.login(req.body.email, req.body.password, async (err,data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Une erreur s'est produite"
                    })
                }
                res.send({
                    token: token,
                });
            })
        } else {
            res.status(401).send({
                message: "Accès refusé"
            })
        }
    })
}

exports.register = async function(req, res) {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })

    // Crypt password
    user.password = await bcrypt.hash(user.password, 10);

    await User.create(user, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.logout = async function(req, res) {
    // Révoquer le token
    res.send("Logout");
}