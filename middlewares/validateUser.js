const validateUser = (req, res, next) =>{
    const { name, email} = req.body;

    if (!name || !email){
        const error = new Error("Name and email are required");
        error.statusCode = 400;
        return next(error);
    }

    next();
};

export {validateUser};