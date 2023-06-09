const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {

    const token = req.headers["authorization"] ? req.headers["authorization"].split(" ")[1] : null;
    if (!token) {
        return res.status(401).send("Le token n'existe pas");
    }
    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
    } catch (e) {
        return res.status(401).send("Le token n'est pas valide");
    }
    return next();
}

module.exports = checkToken;