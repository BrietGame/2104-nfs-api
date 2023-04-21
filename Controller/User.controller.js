const User = require('../Model/User.mysql');

exports.showAll = async function(req, res) {
    await User.showAll(async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.show = async (req,res) => {
    await User.show(req.params.id, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.create = async function(req, res) {
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

exports.update = async function(req, res) {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })

    await User.update(req.params.id, user.first_name, user.last_name, user.email, user.password, user.role, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data});
    })
}

exports.delete = async function (req,res) {
    await User.delete(req.params.id, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data});
    })
}
