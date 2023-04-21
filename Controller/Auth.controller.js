const User = require('../Model/User.mysql');
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
    await User.login(req.body.email, req.body.password, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }
        res.send(token);
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