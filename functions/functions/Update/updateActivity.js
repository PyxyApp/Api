module.exports = {
    updateActivity: async (req, res, db) => {
        const document = db.collection(req.params.data).doc(req.params.id);
        await document.update({
            content: req.body.content,
            list: req.body.list,
            user: req.body.user
        });
    }
};