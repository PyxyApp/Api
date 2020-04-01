module.exports = {
    // CREATE USER
    createUser: (req, res, db, uuid, errorMessage, admin) => {
        admin.auth().createUser({
            email: req.body.email,
            emailVerified: false,
            phoneNumber: req.body.phone,
            password: req.body.password,
            displayName: req.body.displayName,
            photoURL: req.body.photoURL,
            disabled: false,
        })
            .then(function(userRecord) {
                console.log(userRecord);
                db.collection('users').doc(userRecord.uid)
                    .set({
                        uid: userRecord.uid,
                        acp: {
                            admin: false
                        },
                        date: {
                            date_created: new Date(userRecord.metadata.creationTime),
                            last_login: new Date(userRecord.metadata.creationTime)
                        },
                        nat: req.body.nat,
                        email: req.body.email,
                        gender: req.body.gender,
                        name: {
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            username: req.body.username,
                        }
                    });
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid);
            })
            .catch(function(error) {
                console.log('Error creating new user:', error.message);
                return res.status(409).send(errorMessage(error.code, error.message));
            });
    }
};