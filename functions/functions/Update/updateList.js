module.exports = {
    updateList: async (req, res, db) => {
        const document = db.collection(req.params.data).doc(req.params.id);
        await document.update({
            title: req.body.title,
            user: req.body.user,
            list: req.body.list,
            is_active: req.body.is_active,
            is_private: req.body.is_private
        });
    }
};