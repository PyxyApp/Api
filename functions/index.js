const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const api = express();
const bodyParser = require('body-parser');
const serviceAccount = require("./serviceAccountKey.json");
api.use(bodyParser.urlencoded({ extended: false }));
api.use(cors({ origin: true }));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pyxy-f84e8.firebaseio.com"
});
const db = admin.firestore();

// create
api.post('/:data/create', (req, res) => {
    (async () => {
        try {
            const id = Math.random();
                switch(req.params.data){
                    case "users":
                        await db.collection(req.params.data).doc('/' + id + '/')
                        .create({
                            name: {firstname: req.body.firstname, lastname: req.body.firstname},
                            email: req.body.email,
                            login:{id: id, password: crypto.createHash('sha256').update(req.body.password).digest('base64'), username: req.body.username},
                            nat: req.body.nat,
                            phone: req.body.phone
                        });
                        break;
                    default:
                        await db.collection(req.params.data).doc('/' + id + '/')
                        .create({users: req.body});
                }
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// read one User
api.get('/:data/:id', (req, res) => {
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

// read all list for one User
api.get('/users/:id/list', (req, res) => {
    (async () => {
        try {
            const query = db.collection('users').doc(req.params.id).collection('list');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedListByUser = {
                        item: [
                            doc.data()]
                    };
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

// read all
api.get('/:data', (req, res) => {
    (async () => {
        try {
            let query = db.collection(req.params.data);
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedData = {
                        item: [
                            doc.data()]
                };
                    response.push(selectedData);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// update
api.put('/:data/update/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection(req.params.data).doc(req.params.id);
            await document.update({
                data: req.body.data
            });
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// delete
api.delete('/:data/delete/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection(req.params.data).doc(req.params.id);
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

exports.api = functions.https.onRequest(api);