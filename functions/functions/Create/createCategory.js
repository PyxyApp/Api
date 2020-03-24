module.exports = {
    // CREATE USER
    createCategory: async (req, res, db, id) => {
        await db.collection('categories').doc(id)
            .set({
                id: id,
                title: req.body.title
            });
    }
};