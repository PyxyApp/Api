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
                console.log(error.message);
                return res.status(500).send(errorMessage('', error.message));
            }
        })();
    },

    readListsByUser: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const query = db.collection('users').doc(req.params.id);
                        const list = query.collection('lists');
                        let response = [];
                        await list.get().then(querySnapshot => {
                            let docs = querySnapshot.docs;
                            for (let doc of docs) {
                                const selectedListByUser = doc.data();
                                response.push(selectedListByUser);
                            }
                        });
                    if(response.length > 0 ){
                        return res.status(200).send(response);
                    }else{
                        return res.status(404).send(errorMessage('Ressource was not found', 'The id of data is invalid.'));
                    }
            } catch (error) {
                console.log(error.message);
                return res.status(500).send(errorMessage('', error.message));
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
                if(response.length > 0 ){
                    return res.status(200).send(response);
                }else{
                    return res.status(404).send(errorMessage('Ressource was not found', 'The id of data is invalid.'));
                }
            } catch (error) {
                console.log(error.message);
                return res.status(500).send(errorMessage('', error.message));
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
                if(response.length > 0 ){
                    return res.status(200).send(response);
                }else{
                    return res.status(404).send(errorMessage('Ressource was not found', 'The id of data is invalid.'));
                }
            } catch (error) {
                console.log(error.message);
                return res.status(500).send(errorMessage('', error.message));
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
                if(response.length > 0 ){
                    return res.status(200).send(response);
                }else{
                    return res.status(404).send(errorMessage('Ressource was not found', 'The id of data is invalid.'));
                }
            } catch (error) {
                console.log(error.message);
                return res.status(500).send(errorMessage('', error.message));
            }
        })();
    }

};