module.exports = {
    updateUser: async (req, res, db, admin) => {
        admin.auth().updateUser( req.params.id, {
            email: req.body.email,
            emailVerified: req.body.email_verified,
            phoneNumber: req.body.phone,
            password: req.body.password,
            displayName: req.body.firstname + req.body.lastname,
            photoURL: req.body.photoURL,
            disabled: req.body.is_active
        })
            .then((userRecord) => {
                const document = db.collection(req.params.data).doc(req.params.id);
                    document.update({
                        email: req.body.email,
                        name: {
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            username: req.body.username
                        },
                        admin: req.body.admin,
                        nat: req.body.nat,
                        phone: req.body.phone,
                        is_active: req.body.is_active
                });
            })
            .catch(e => {
                console.error(e.message)
            });
    }
};