const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
if (!req.headers.authorization) {
    return res.status(401).end()
  }
  const token = req.headers.authorization.split(' ')[1]
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecret')
    } catch(error) {
        return res.status(401)
            .json({ message: 'Token is invalid.', error });
    }

    if (!decodedToken) {
        return res.status(401)
            .json({ message: 'Not authenticated.' });
    }

    req.userId = decodedToken.userId;
    next();
};