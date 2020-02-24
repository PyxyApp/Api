const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const crypto = require('crypto');
const uuid = require('uuid');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const serviceAccount = require("./serviceAccountKey.json");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

errorMessage = (reason, message, type, detail) => {
    return {
        "reason": reason,
        "message": message,
        "type": type,
        "detail": detail
    }
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pyxy-f84e8.firebaseio.com"
});
const db = admin.firestore();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/^(\\d+)$', function(req, res) {
    res.send('hello world');
});

// CREATE USER / ACTIVITY / CATEGORY
app.post('/:data', (req, res) => {
    const id = uuid.v1();
    (async () => {
        try {
            switch(req.params.data){
                case "users":
                    await db.collection('users').doc(id)
                        .set({
                            name: {firstname: req.body.firstname, lastname: req.body.firstname},
                            email: req.body.email,
                            login:{id: id, password: crypto.createHash('sha256').update(req.body.password).digest('base64'), username: req.body.username},
                            nat: req.body.nat,
                            phone: req.body.phone
                        });
                    break;
                case "activities":
                    await db.collection('activities').doc(id)
                        .set({
                            id: id,
                            content: req.body.content,
                            list: req.body.list,
                            userId: req.body.userId,
                            isActivated: true,
                            date: {
                                dateCreated: Date.now(),
                                dateDisabled: 'activated'
                            }
                        });
                    break;
                case "categories":
                    await db.collection('categories').doc(id)
                        .set({
                            id: id,
                            title: req.body.title
                        });
                    break;
                default:
                    await db.collection(req.params.data).doc('/' + id + '/')
                        .create({users: req.body});
            }
            return res.status(200).send('The '+req.params.data+' has been successfully created with id '+id+'!');
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// CREATE LIST
app.post('/users/:id/lists/', (req, res) => {
    const id = uuid.v1();
    (async () => {
        try {
            await db.collection('users').doc(req.params.id).collection('lists').doc(id)
                .set({
                    id: id,
                    title: req.body.title,
                    private: req.body.private,
                    isActivated: true,
                    date: {
                        dateCreated: Date.now(),
                        dateLimit: req.body.dateLimit,
                        dateDisabled: 'activated'
                    },
                    description: req.body.description
                });
            return res.status(200).send('The "'+req.body.title+'" list has been successfully created with id '+id+'!');
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// READ ONE USER / CATEGORY / ACTIVITY
app.get('/:data/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection(req.params.data).doc(req.params.id);
            let data = await document.get();
            let response = data.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// READ ALL LIST FOR ONE USER
app.get('/users/:id/lists', (req, res) => {
    (async () => {
        try {
            const query = db.collection('users').doc(req.params.id).collection('lists');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedListByUser = doc.data();
                    response.push(selectedListByUser);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// get All ActivityCard by List
app.get('/users/:id/lists/:idList/', (req, res) => {
    (async () => {
        try {
            const document = db.collection('users')
                .doc(req.params.id).collection('lists').doc(req.params.idList);
            let data = await document.get();
            let response = data.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// get ActivityCard by List by User
app.get('/users/:id/lists/:idList/tasks', (req, res) => {
    (async () => {
        try {
            const query = db.collection('users').doc(req.params.id)
                .collection('lists').doc(req.params.idList)
                .collection("tasks");
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedActivitiesByList = doc.data();
                    response.push(selectedActivitiesByList);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// READ ALL DATA OF USER / CATEGORY / ACTIVITY
app.get('/:data', (req, res) => {
    (async () => {
        try {
            let query = db.collection(req.params.data);
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedData = doc.data();
                    response.push(selectedData);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            return res.status(400).send(errorMessage('BadRequest', 'At least one filtering parameter must exist'));
        }
    })();
});

// UPDATE USER / CATEGORY / ACTIVITY
app.put('/:data/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection(req.params.data).doc(req.params.id);
            await document.update({
                email: req.body.email,
                name: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname
                },
                nat: req.body.nat,
                phone: req.body.phone
            });
            return res.status(200).send('The '+req.params.data+' was updated with success !');
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// DELETE USER / ACTIVITY / CATEGORY
app.delete('/:data/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection(req.params.data).doc(req.params.id);
            await document.delete();
            return res.status(200).send('The '+req.params.data+' was deleted with success !');
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// DELETE LIST
app.delete('/users/:id/lists/:idList', (req, res) => {
    (async () => {
        try {
            const document = db.collection('users').doc(req.params.id)
                .collection('lists').doc(req.params.idList);
            await document.delete();
            return res.status(200).send('The List was deleted with success !');
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

const api = app;
exports.api = functions.https.onRequest(api);