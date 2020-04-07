module.exports = {
    // CREATE USER
    createTask: async (req, res, db, id) => {
        let description;
        if(req.body.description){
            description = req.body.description
        }else{
            description = ""
        }
        await db.collection('tasks').doc(id)
            .set({
                id: id,
                list: req.body.list,
                description: description,
                name: req.body.name,
                date: {
                    date_created: new Date(Date.now())
                },
                is_done: false,
                is_private: req.body.is_private
            });
    }
};