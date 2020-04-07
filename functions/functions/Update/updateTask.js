module.exports = {
    updateTask: async (req, res, db) => {
        let date_done = null;
        if(req.body.is_done){
            if(req.body.date_done === null){
                date_done = new Date(Date.now())
                console.log("here");
            }
        }
        console.log(req.body.date_done === null);
        console.log(date_done);
        const document = db.collection(req.params.data).doc(req.params.id);
        await document.update({
            name: req.body.name,
            description: req.body.description,
            list: req.body.list,
            date_done: date_done,
            is_done: req.body.is_done,
            is_private: req.body.is_private
        });
    }
};