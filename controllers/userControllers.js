import { successResponse } from "../utils/responseHandler.js";
import { USERS } from "../utils/users.js";


const createUser = (req, res, next) =>{
    try{ 
        let userLength = USERS.length;
        const {name, email} = req.body;
        const data = {
            id: userLength + 1,
            name, 
            email
        };

        USERS.push(data);
        return successResponse(res, "User is created successfully.", USERS);
    }
    catch(error){
        next(error);
    }
};


const getUsers = (req, res, next) =>{
    try{
        return successResponse(res, "Users data", USERS);
    }
    catch(error){
        next(error);
    }
};


const getUserById = (req, res, next) =>{
    try{
        const indexID = req.params.id;
        const user = USERS.find(u => u.id == indexID);
        console.log(user);

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
        const index = USERS.findIndex(u => u.id == req.params.id);

        if (index === -1){
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }
        const result = USERS[index]

        USERS.splice(index, 1);

        return successResponse(res, "User deleted", result);
    }
    catch(error){
        next(error);
    }
};


export{
    createUser, getUsers, getUserById, deleteUsr
}