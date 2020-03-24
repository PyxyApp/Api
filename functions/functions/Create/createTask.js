module.exports = {
    // CREATE USER
    createTask: async (req, res, db, id) => {
        await db.collection('tasks').doc(id)
            .set({
                category: req.body.category,
                description: req.body.description,
                name: req.body.name,
                is_done: false,
                is_private: req.body.private
            });
    }
};