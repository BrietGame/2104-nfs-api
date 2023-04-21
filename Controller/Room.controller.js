const Room = require('../Model/Room.mysql');

exports.showAll = async function(req, res) {
    await Room.showAll(async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.show = async (req,res) => {
    await Room.show(req.params.id, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.create = async function(req, res) {
    const room = new Room({
        name: req.body.name,
        description: req.body.description,
        tag: req.body.tag
    })

    await Room.create(room, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.update = async function(req, res) {
    const room = new Room({
        name: req.body.name,
        description: req.body.description,
        tag: req.body.tag
    })

    await Room.update(req.params.id, room.name, room.description, room.tag, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data});
    })
}

exports.delete = async function (req,res) {
    await Room.delete(req.params.id, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data});
    })
}
