const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const serviceAccount = require("./serviceAccountKey.json");
const routes = require('./routes/routes');
const jwt = require('jsonwebtoken');
const privateKey = require('./privateKey.json');
const key = serviceAccount.project_id+"."+privateKey.author+"."+privateKey.privateKey;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: true }));

const errorMessage = (reason, message, type, detail) => {
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

routes.crud(app, db, errorMessage, key, jwt, admin);

const api = app;
exports.api = functions.https.onRequest(api);