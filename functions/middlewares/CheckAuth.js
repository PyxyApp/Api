export const CheckToken = (jwt, errorMessage, token, key, next, action) => {
    try {
        jwt.verify(token, key);
    } catch(err) {
        console.error(errorMessage("Invalid Token", "Your token is invalid"))
    }
    return next(action)
};