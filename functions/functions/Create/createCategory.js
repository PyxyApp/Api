module.exports = {
    // CREATE USER
    createCategory: async (req, res, db, id) => {
        let description;
        if(req.body.description){
            description = req.body.description
        }else{
            description = ""
        }
        await db.collection('categories').doc(id)
            .set({
                id: id,
                title: req.body.title,
                description: description
            });
    }
};