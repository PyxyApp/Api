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

    deleteLists: (req, res, db, errorMessage, Delete) => {
        (async () => {
            try {
                const document = db.collection('users').doc(req.params.id)
                    .collection('lists').doc(req.params.idList);
                // Check if tasks
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
                    for(let i=0; i< response.length; i++){
                        req.params.idTask = response[i].id;
                        Delete.deleteTask(req, res, db, errorMessage)
                    }
                }
                await document.delete();
                return res.status(200).send('The List was deleted with success and the tasks was also deleted !');
            } catch (error) {
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

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