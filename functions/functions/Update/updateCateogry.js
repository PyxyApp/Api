module.exports = {
    updateCateogry: async (req, res, db) => {
        const document = db.collection(req.params.data).doc(req.params.id);
        await document.update({
            title: req.body.title
        });
    }
};