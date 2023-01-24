const sql = require('../Config/mysql');

const Mangas = function(mangas) {
    this.name = mangas.name;
    this.author = mangas.author;
    this.number = mangas.number;
    this.gender = mangas.gender;
}

Mangas.showAll = result => {
    sql.query("SELECT * FROM data", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Mangas.show = (id, result) => {
    sql.query("SELECT * FROM data WHERE id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
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

Mangas.update = (id, name, author, number, result) => {
    sql.query("UPDATE data SET name = ?, author = ?, number = ? WHERE id = ?", [name, author, number, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Mangas.delete = (id, result) => {
    sql.query("DELETE from data WHERE id = ?", id, (err,res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

module.exports = Mangas;
