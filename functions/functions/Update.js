import UFU from './Update/updateUser'
import UFC from './Update/updateCateogry'
import UFA from './Update/updateActivity'
import UFL from './Update/updateList'
import UFT from './Update/updateTask'

module.exports = {
    // UPDATE
    updateData: (req, res, db, errorMessage) => {
        (async () => {
            try {
                switch(req.params.data){
                    case 'user':
                        await UFU.updateUser(req, res, db);
                        break;
                    case 'activities':
                        await UFA.updateActivity(req, res, db);
                        break;
                    case 'categories':
                        await UFC.updateCateogry(req, res, db);
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
                console.log(error);
                return res.status(500).send(errorMessage('', error));
            }
        })();
    },

};