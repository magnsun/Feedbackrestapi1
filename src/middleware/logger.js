module.exports = (req, res, next) => {
    // Log the request method and the URL
    console.log(`${req.method} request for '${req.url}'`);
    // Move on to the next middleware or rout
    next();
};
