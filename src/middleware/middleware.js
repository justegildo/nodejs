const jwt = require('jsonwebtoken');

const extractBearer = authorization => {
    if (typeof authorization !== 'string') {
        return false
    }

    const matches = authorization.match(/(bearer)\s+(\S+)/i)
    return matches && matches[2]
}


verifyAuthToken = (req, res, next) => {
    const token = req.headers.authorization && extractBearer(req.headers.authorization)

    if (!token) {
        return res.status(401).json({ message: "Veuillez-vous s'authentifier !" });
    }

    jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {

        if (err) {
            return res.status(401).json({ message: 'Token invalide !' });
        }

        next();
    })
}

module.exports = verifyAuthToken