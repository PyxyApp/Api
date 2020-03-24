module.exports = {
    // CREATE USER
    createList: async (req, res, db, id) => {
        await db.collection('lists').doc(id)
            .set({
                id: id,
                title: req.body.title,
                private: req.body.private,
                isActivated: true,
                date: {
                    dateCreated: Date.now(),
                    dateLimit: req.body.dateLimit,
                    dateDisabled: 'activated'
                },
                description: req.body.description
            });
    }
};