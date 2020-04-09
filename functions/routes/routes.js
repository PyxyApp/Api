const uuid = require('uuid');
const Token = require ("../functions/Token");
const appFunc = require('../functions/appFunctions');
const Create = require("../functions/Create");
const Read = require("../functions/Read");
const Update = require("../functions/Update");
const Delete = require("../functions/Delete");
const pkg = require('../../package');

module.exports = {

    crud: (app, db, errorMessage, key, jwt, admin) => {

        const getToken = (req, res) => {
            return req.headers.authorization !== undefined ? req.headers.authorization.split(" ")[1] : res.status(403).send(errorMessage('invalid token', 'Your token is invalid or undefined'));
        };

        app
            .get("/", (req, res) => {
                res.json({ "API_Version": pkg.version });
            })
            .get('/:data', (req, res) => {
                appFunc.Func(app, jwt, errorMessage, getToken, key, db, uuid, admin, req, res, Read, 'readData')
            })
            .get('/:data/:id', (req, res) => {
                appFunc.Func(app, jwt, errorMessage, getToken, key, db, uuid, admin, req, res, Read, 'readOneData')
            })
            .post('/token', (req, res) => {
                Token.postToken(req, res, jwt, errorMessage, key)
            })
            .post('/:data', (req, res) => {
                appFunc.Func(app, jwt, errorMessage, getToken, key, db, uuid, admin, req, res, Create, 'createData');
            })
            .put('/:data/:id', (req, res) => {
                appFunc.Func(app, jwt, errorMessage, getToken, key, db, uuid, admin, req, res, Update, 'updateData');
            })
            .delete('/:data/:id', (req, res) => {
                appFunc.Func(app, jwt, errorMessage, getToken, key, db, uuid, admin, req, res, Delete, 'deleteData');
            })

    }
};