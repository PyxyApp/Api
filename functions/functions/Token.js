module.exports = {

    postToken: (req, res, jwt, errorMessage) => {
        (async () => {
            try {
                const payload = {
                    userName: {
                        "firstname": req.body.firstname,
                        "lastname": req.body.lastname,
                        "username": req.body.username
                    },
                };
                jwt.sign(payload, req.body.key, function(err, token) {
                    try{
                        return res.status(200).send('Your token: \n' + token);
                    } catch (err){
                        console.log(err);
                        return res.status(400).send(errorMessage('invalid data', error.message));
                    }
                });
            } catch (error) {
                console.log(error.message);
                return res.status(400).send(errorMessage('invalid data', error.message));
            }
        })();
    }
};