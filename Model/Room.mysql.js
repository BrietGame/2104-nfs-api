const sql = require('../Config/mysql');

const Room = function(rooms) {
    this.id = rooms.id;
    this.name = rooms.name;
    this.description = rooms.description;
    this.tag = rooms.tag;
}

Room.showAll = result => {
    sql.query("SELECT * FROM room", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Room.show = (id, result) => {
    sql.query("SELECT * FROM room WHERE id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Room.create = (newRoom, result) => {
    sql.query("INSERT INTO room SET ?", newRoom, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null,{id:res.insertId, ...newRoom})
    })
}

Room.update = (id, name, description, tag, result) => {
    sql.query("UPDATE room SET name = ?, description = ?, tag = ? WHERE id = ?", [name, description, tag, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Room.delete = (id, result) => {
    sql.query("DELETE from room WHERE id = ?", id, (err,res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

module.exports = Room;
