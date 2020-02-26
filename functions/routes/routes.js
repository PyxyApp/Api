const crypto = require('crypto');
const uuid = require('uuid');
const Create = require("../functions/Create");
const Read = require("../functions/Read");
const Update = require("../functions/Update");
const Delete = require("../functions/Delete");

module.exports = {

    crud: (app, db, errorMessage) => {

        app.get('/', function(req, res) {
            res.send('API version 1.1.0');
        });

        app.get('/^(\\d+)$', function(req, res) {
            res.send('API version 1.1.0');
        });

// CREATE USER / ACTIVITY / CATEGORY
        app.post('/:data', (req, res) => {
            Create.createData(req, res, db, uuid, errorMessage, crypto);
        });

// CREATE LIST
        app.post('/users/:id/lists/', (req, res) => {
            Create.createList(req, res, db, uuid, errorMessage)
        });

// CREATE TASK
        app.post('/users/:id/lists/:idList/tasks', (req, res) => {
            Create.createTask(req, res, db, uuid, errorMessage)
        });

// READ ALL DATA OF USER / CATEGORY / ACTIVITY
        app.get('/:data', (req, res) => {
            Read.readData(req, res, db, errorMessage)
        });

// READ ONE USER / CATEGORY / ACTIVITY
        app.get('/:data/:id', (req, res) => {
            Read.readOneData(req, res, db, errorMessage)
        });

// READ ALL LIST FOR ONE USER
        app.get('/users/:id/lists', (req, res) => {
            Read.readListsByUser(req, res, db, errorMessage)
        });

// get All ActivityCard by List
        app.get('/users/:id/lists/:idList/', (req, res) => {
            Read.readOneListByUser(req, res, db, errorMessage)
        });

// get ActivityCard by List by User
        app.get('/users/:id/lists/:idList/tasks', (req, res) => {
            Read.readTasksByListByUser(req, res, db, errorMessage)
        });

// get Task by idList by User
        app.get('/users/:id/lists/:idList/tasks/:idTask', (req, res) => {
            Read.readOneTaskByListByUser(req, res, db, errorMessage)
        });

// UPDATE USER / CATEGORY / ACTIVITY
        app.put('/:data/:id', (req, res) => {
            Update.updateData(req, res, db, errorMessage)
        });

// DELETE USER / ACTIVITY / CATEGORY
        app.delete('/:data/:id', (req, res) => {
            Delete.deleteData(req, res, db, errorMessage)
        });

// DELETE LIST
        app.delete('/users/:id/lists/:idList', (req, res) => {
            Delete.deleteLists(req, res, db, errorMessage)
        });

        app.delete('/users/:id/lists/:idList/tasks/:idTask', (req, res) => {
            Delete.deleteTask(req, res, db, errorMessage);
        });
    }
};