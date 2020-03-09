module.exports = {
    CheckAuth:(res, jwt, errorMessage, token, key) => next => action => {
        try {
            jwt.verify(token, key);
            next(action);
        } catch(err) {
            return res.status(403).send(errorMessage("Invalid Token", "Your token is invalid"));
        }
    }
};