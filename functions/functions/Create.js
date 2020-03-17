module.exports = {
    // CREATE
    createData: (req, res, db, uuid, errorMessage, admin) => {
        const id = uuid.v1();
        (async () => {
            try {
                switch(req.params.data){
                    case "users":
                        admin.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
                            .then(function() {
                                db.collection('users').doc(id)
                                .set({
                                    name: {firstname: req.body.firstname, lastname: req.body.firstname},
                                    email: req.body.email,
                                    nat: req.body.nat,
                                    phone: req.body.phone
                                });
                            })
                            .catch(function(error) {
                                return res.status(409).send(errorMessage(error.code, error.message))
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
                console.log(error.message);
                return res.status(404).send(errorMessage('Resource was not found.', error.message));
            }
        })();
    },

    createList: (req, res, db, uuid, errorMessage) => {
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
                console.log(error.message);
                return res.status(500).send(errorMessage('', error.message));
            }
        })();
    },

    createTask: (req, res, db, uuid, errorMessage) => {
        const id = uuid.v1();
        (async () => {
            try {
                req.body.id = id;
                await db.collection('users').doc(req.params.id)
                    .collection('lists').doc(req.params.idList)
                    .collection('tasks').doc(id)
                    .set(req.body);
                return res.status(200).send('The "'+req.body.title+'" task has been successfully created with id '+id+'!');
            } catch (error) {
                console.log(error.message);
                return res.status(400).send(errorMessage('invalid data', error.message));
            }
        })();
    }
};