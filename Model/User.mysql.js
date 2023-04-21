const sql = require('../Config/mysql');

const User = function(users) {
    this.id = users.id;
    this.first_name = users.first_name;
    this.last_name = users.last_name;
    this.email = users.email;
    this.password = users.password;
    this.role = users.role;
}

User.showAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

User.show = (id, result) => {
    sql.query("SELECT * FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

User.getPwd = (email, result) => {
    sql.query("SELECT password FROM user WHERE email = ?", email, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res[0]);
    })
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null,{id:res.insertId, ...newUser})
    })
}

User.update = (id, first_name, last_name, email, password, role, result) => {
    sql.query("UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ?, role = ? WHERE id = ?", [first_name, last_name, email, password, role, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

User.delete = (id, result) => {
    sql.query("DELETE from user WHERE id = ?", id, (err,res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

User.login = (email, password, result) => {
    sql.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password], (err,res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

module.exports = User;
