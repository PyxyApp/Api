module.exports = {
    // DELETE
    deleteData: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const document = db.collection(req.params.data).doc(req.params.id);
                await document.delete();
                return res.status(200).send('The '+req.params.data+' was deleted with success !');
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

    // DELETE TASK
    deleteLists: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const document = db.collection('users').doc(req.params.id)
                    .collection('lists').doc(req.params.idList);
                const query = document.collection("tasks");
                let response = [];
                await query.get().then(querySnapshot => {
                    let docs = querySnapshot.docs;
                    for (let doc of docs) {
                        const selectedActivitiesByList = doc.data();
                        response.push(selectedActivitiesByList);
                    }
                });
                if(response.length > 0){
                    console.log(response)
                }
                // await document.delete();
                return res.status(200).send('The List was deleted with success !');
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

    // DELETE TASK
    deleteTask: (req, res, db, errorMessage) => {
        (async () => {
            try {
                const document = db.collection('users').doc(req.params.id)
                    .collection('lists').doc(req.params.idList)
                    .collection('tasks').doc(req.params.idTask);
                await document.delete();
                return res.status(200).send('The Task was deleted with success !');
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    }

};