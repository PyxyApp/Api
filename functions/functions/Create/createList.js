module.exports = {
    // CREATE USER
    createList: async (req, res, db, id) => {
        let description;
        if(req.body.description){
            description = req.body.description
        }else{
            description = ""
        }
        await db.collection('lists').doc(id)
            .set({
                id: id,
                title: req.body.title,
                is_private: req.body.is_private,
                is_active: req.body.is_active,
                date: {
                    date_created: new Date(Date.now())
                },
                user: req.body.user,
                category: req.body.category,
                description: description
            });
    }
};