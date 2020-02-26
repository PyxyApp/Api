module.exports = {
    // READ
    readData: (req, res, db, errorMessage) => {
        (async () => {
            try {
                if(req.params.data === 'users' || req.params.data === 'activities' || req.params.data === 'categories'){
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
                }else{
                    return res.status(404).send(errorMessage('Invalid Data', 'The data does not exist.', '', req.params.data));
                }
            } catch (error) {
                return res.status(400).send(errorMessage('BadRequest', 'At least one filtering parameter must exist'));
            }
        })();
    },

    readOneData: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const document = db.collection(req.params.data).doc(req.params.id);
                let data = await document.get();
                let response = data.data();
                if(response === undefined){
                    return res.status(404).send(errorMessage('Resource was not found', 'The data at the specified id does not exist.'));
                }else{
                    return res.status(200).send(response);
                }
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

    readListsByUser: (req, res, db, errorMessage) => {
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
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

    readOneListByUser: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const document = db.collection('users')
                    .doc(req.params.id).collection('lists').doc(req.params.idList);
                let data = await document.get();
                let response = data.data();
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

    readTasksByListByUser: (req, res, db, errorMessage) => {
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
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

    readOneTaskByListByUser: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const query = db.collection('users').doc(req.params.id)
                    .collection('lists').doc(req.params.idList)
                    .collection('tasks').doc(req.params.idTask);
                let data = await query.get();
                let response = data.data();
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    }

};