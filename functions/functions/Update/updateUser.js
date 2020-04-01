module.exports = {
    updateUser: async (req, res, db, admin) => {
        admin.auth().updateUser( req.params.id, {
            email: req.body.email,
            emailVerified: req.body.email_verified,
            phoneNumber: req.body.phone,
            password: req.body.password,
            displayName: req.body.displayName,
            photoURL: req.body.photoURL,
            disabled: true
        })
            .then((userRecord) => {
                console.log(userRecord);
                const document = db.collection(req.params.data).doc(req.params.id);
                    document.update({
                    name: {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    },
                    nat: req.body.nat,
                    phone: req.body.phone
                });
            })
            .catch(e => {
                console.error(e.message)
            });
    }
};