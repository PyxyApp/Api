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
            uid: id
        })
            .then(function(userRecord) {
                db.collection('users').doc(id)
                    .set({
                        acp: {
                            admin: false
                        },
                        nat: req.body.nat,
                        phone: req.body.phone
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