module.exports = {
    updateCateogry: async (req, res, db) => {
        const document = db.collection(req.params.data).doc(req.params.id);
        await document.update({
            name: {
                firstname: req.body.firstname,
                lastname: req.body.lastname
            },
            nat: req.body.nat,
            phone: req.body.phone
        });
    }
};