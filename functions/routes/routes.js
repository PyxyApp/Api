const crypto = require('crypto');
const uuid = require('uuid');
const Create = require("../functions/Create");
const Read = require("../functions/Read");
const Update = require("../functions/Update");
const Delete = require("../functions/Delete");
const Auth = require('../middlewares/CheckAuth');

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

        app.get('/^(\\d+)$', function(req, res) {
            res.send('API version 1.3.0');
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

// CREATE USER / ACTIVITY / CATEGORY
        app.post('/:data', (req, res) => {
            Auth.CheckAuth(app, jwt, errorMessage, getToken(req, res), key);
            Create.createData(req, res, db, uuid, errorMessage, admin);
        });

// CREATE LIST
        app.post('/users/:id/lists/', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Create.createList(req, res, db, uuid, errorMessage)
        });

// CREATE TASK
        app.post('/users/:id/lists/:idList/tasks', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Create.createTask(req, res, db, uuid, errorMessage)
        });

// READ ALL DATA OF USER / CATEGORY / ACTIVITY
        app.get('/:data', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readData(req, res, db, errorMessage)
        });

// READ ONE USER / CATEGORY / ACTIVITY
        app.get('/:data/:id', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readOneData(req, res, db, errorMessage)
        });

// READ ALL LIST FOR ONE USER
        app.get('/users/:id/lists', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readListsByUser(req, res, db, errorMessage)
        });

// get All ActivityCard by List
        app.get('/users/:id/lists/:idList/', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readOneListByUser(req, res, db, errorMessage)
        });

// get ActivityCard by List by User
        app.get('/users/:id/lists/:idList/tasks', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readTasksByListByUser(req, res, db, errorMessage)
        });

// get Task by idList by User
        app.get('/users/:id/lists/:idList/tasks/:idTask', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Read.readOneTaskByListByUser(req, res, db, errorMessage)
        });

// UPDATE USER / CATEGORY / ACTIVITY
        app.put('/:data/:id', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Update.updateData(req, res, db, errorMessage)
        });

// DELETE USER / ACTIVITY / CATEGORY
        app.delete('/:data/:id', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Delete.deleteData(req, res, db, errorMessage)
        });

// DELETE LIST
        app.delete('/users/:id/lists/:idList', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Delete.deleteLists(req, res, db, errorMessage, Delete)
        });

        app.delete('/users/:id/lists/:idList/tasks/:idTask', (req, res) => {
            Auth.CheckAuth(res, jwt, errorMessage, getToken(req, res), key);
            Delete.deleteTask(req, res, db, errorMessage);
        });
    }
};