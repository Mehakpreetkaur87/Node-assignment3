import {successResponse} from "utils/responseHandler.js";

let users = [];

const createUser = (req, res, next) =>{
    try{ 
        const {name, email} = req.body;
        const user = {
            id: Date.now(),
            name, email
        };

        users.push(user);
        return successResponse(res, "User is created successfully.", user);
    }
    catch(error){
        next(error);
    }
};


const getUsers = (req, res, next) =>{
    try{
        return successResponse(res, "Users data", users);
    }
    catch(error){
        next(error);
    }
};


const getUserById = (req, res, next) =>{
    try{
        const user = users.find(u => u.id == req.params.id);

        if(!user){
            const error = new Error("user not found");
            error.statusCode = 404;
            return next(error);
        }

        return successResponse(res, "User is successfully fetched", user);
    }
    catch(error){
        next(error);
    }
};

const deleteUsr = (req, res, next) => {
    try{
        const index = users.findIndex(u =u.id == req.params.id);

        if (index === -1){
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }

        users.splice(index, 1);

        return successResponse(res, "User deleted", {});
    }
    catch(error){
        next(error);
    }
};


export{
    createUser, getUsers, getUserById, deleteUsr
}