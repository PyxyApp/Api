const Auth = require('../middlewares/CheckAuth');

module.exports = {
    Func: (app, jwt, errorMessage, getToken, key, db, uuid, admin, req, res, data, dataFunc) => {
            Auth.CheckAuth(app, jwt, errorMessage, getToken(req, res), key);
            data[dataFunc](req, res, db, uuid, errorMessage, admin);
    }
};