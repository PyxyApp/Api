import CFU from './Create/createUser';
import CFA from './Create/createActivity';
import CFT from './Create/createTask';
import CFC from './Create/createCategory';
import CFL from './Create/createList';

module.exports = {
    // CREATE
    createData: (req, res, db, uuid, errorMessage, admin) => {
        const id = uuid.v1();
        (async () => {
            try {
                switch(req.params.data){
                    case "users":
                        CFU.createUser(req, res, db, uuid, errorMessage, admin);
                        break;
                    case "activities":
                        await CFA.createActivity(req, res, db, id);
                        break;
                    case "tasks":
                        await CFT.createTask(req, res, db, id);
                        break;
                    case "categories":
                        await CFC.createCategory(req, res, db, id);
                        break;
                    case "lists":
                        await CFL.createList(req, res, db, id);
                        break;
                    default:
                        return res.status(404).send(errorMessage('invalid data', 'The data was not found'));
                }
                return res.status(200).send('The '+req.params.data+' has been successfully created with id '+id+'!');
            } catch (error) {
                console.log(error.message);
                return res.status(400).send(errorMessage('invalid data', error.message));
            }
        })();
    }
};