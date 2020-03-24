module.exports = {
    // CREATE USER
    createActivity: async(req, res, db, id) => {
        await db.collection('activities').doc(id)
            .set({
                id: id,
                content: req.body.content,
                list: req.body.list,
                userId: req.body.userId,
                isActivated: true,
                date: {
                    dateCreated: Date.now(),
                    dateDisabled: 'activated'
                }
            });
    }
};