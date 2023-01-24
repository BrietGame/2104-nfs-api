const Mangas = require('../Model/Manga.mysql');

exports.showAll = async function(req, res) {
    await Mangas.showAll(async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.show = async (req,res) => {
    await Mangas.show(req.params.id, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.create = async function(req, res) {
    const manga = new Mangas({
        name: req.body.name,
        author: req.body.author,
        number: req.body.number,
        gender: req.body.gender
    })

    await Mangas.create(manga, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data})
    })
}

exports.update = async function(req, res) {
    const manga = new Mangas({
        name: req.body.name,
        author: req.body.author,
        number: req.body.number,
        gender: req.body.gender
    })

    await Mangas.update(req.params.id, manga.name, manga.author, manga.number, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data});
    })
}

exports.delete = async function (req,res) {
    await Mangas.delete(req.params.id, async (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite"
            })
        }

        res.json({data:data});
    })
}
