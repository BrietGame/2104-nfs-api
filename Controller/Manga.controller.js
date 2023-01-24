const Mangas = require('../Model/Manga.mysql');

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
