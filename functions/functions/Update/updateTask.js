module.exports = {
    updateTask: async (req, res, db) => {
        const document = db.collection(req.params.data).doc(req.params.id);
        await document.update({
            name: req.body.name,
            description: req.body.description,
            list: req.body.list,
            is_done: req.body.is_done,
            is_private: req.body.is_private
        });
    }
};