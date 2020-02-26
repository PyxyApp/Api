module.exports = {
    // UPDATE
    updateData: (req, res, db, errorMessage) => {
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
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

};