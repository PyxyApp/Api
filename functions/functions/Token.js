module.exports = {

    postToken: (req, res, jwt, errorMessage, key) => {
        (async () => {
            try {
                const payload = {
                    "iss": "Pyxy",
                    "aud": "Pyxy Office / API",
                    email: req.body.email,
                    AdminControlPanel: true
                };
                jwt.verify(req.headers.authorization, key);
                jwt.sign(payload, key, function(err, token) {
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