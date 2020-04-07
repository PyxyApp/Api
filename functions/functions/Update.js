const UFU = require('./Update/updateUser');
const UFC = require('./Update/updateCateogry');
const UFA = require('./Update/updateActivity');
const UFL = require('./Update/updateList');
const UFT = require('./Update/updateTask');

module.exports = {
    // UPDATE
    updateData: (req, res, db, uuid, errorMessage, admin) => {
        (async () => {
            try {
                switch(req.params.data){
                    case 'users':
                        await UFU.updateUser(req, res, db, admin);
                        break;
                    case 'activities':
                        await UFA.updateActivity(req, res, db);
                        break;
                    case 'categories':
                        await UFC.updateCategory(req, res, db);
                        break;
                    case 'lists':
                        await UFL.updateList(req, res, db);
                        break;
                    case 'tasks':
                        await UFT.updateTask(req, res, db);
                        break;
                    default:
                        return res.status(404).send(errorMessage('Invalid Data', 'Ressource was not found'));
                }
                return res.status(200).send('The '+req.params.data+' was updated with success !');
            } catch (error) {
                console.log(error.message);
                return res.status(500).send(errorMessage( error.code, error.message));
            }
        })();
    },

};