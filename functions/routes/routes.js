const uuid = require('uuid');
const Create = require("../functions/Create");
const Read = require("../functions/Read");
const Update = require("../functions/Update");
const Delete = require("../functions/Delete");
const Auth = require('../middlewares/CheckAuth');
const pkg = require('../../package');

module.exports = {

    crud: (app, db, errorMessage, key, jwt, admin) => {

        const getToken = (req, res) => {
            const str =  req.headers.authorization;
            if(str !== undefined){
                str.split(" ");
                const token = str[1];
                return token
            }else{
                return res.status(403).send(errorMessage('invalid token', 'Your token is invalid or undefined'));
            }
        };

        app.get('/', function(req, res) {
            res.json({
             "API_Version": pkg.version
            });
        });

        app.post('/token', function(req, res) {
            (async () => {
                try {
                    const payload = {
                        userName: {
                            "firstname": req.body.firstname,
                            "lastname": req.body.lastname,
                            "username": req.body.username
                        },
                    };
                    jwt.sign(payload, req.body.key, function(err, token) {
                        try{
                            return res.status(200).send('Your token: \n' + token);
                        } catch (err){
                            console.log(err);
                            return res.status(400).send(errorMessage('invalid data', error.message));
                        }
                    });
                } catch (error) {
                    console.log(error.message);
                    return res.status(400).send(errorMessage('invalid data', error.message));
                }
            })();
        });

// CREATE USER / ACTIVITY / CATEGORY / LISTS / TASKS
        app.post('/:data', (req, res) => {
            Auth.CheckAuth(app, jwt, errorMessage, getToken(req, res), key);
            Create.createData(req, res, db, uuid, errorMessage, admin);
        });

// READ ALL DATA OF USER / CATEGORY / ACTIVITY / TASK / LIST
        app.get('/:data', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readData(req, res, db, errorMessage)
        });

// READ ONE USER / CATEGORY / ACTIVITY / TASK / LIST
        app.get('/:data/:id', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readOneData(req, res, db, errorMessage)
        });

// UPDATE USER / CATEGORY / ACTIVITY / TASKS / LIST
        app.put('/:data/:id', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Update.updateData(req, res, db, errorMessage)
        });

// DELETE USER / ACTIVITY / CATEGORY / TASK / LIST
        app.delete('/:data/:id', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Delete.deleteData(req, res, db, errorMessage)
        });
    }
};