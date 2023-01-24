const sql = require('../Config/mysql');

const Mangas = function(mangas) {
    this.name = mangas.name;
    this.author = mangas.author;
    this.number = mangas.number;
    this.gender = mangas.gender;
}

Mangas.create = (newManga, result) => {
    sql.query("INSERT INTO data SET ?", newManga, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null,{id:res.insertId, ...newManga})
    })
}

module.exports = Mangas;
