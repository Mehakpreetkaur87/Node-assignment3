import express from "express";

import { createUser, getUsers, getUserById, deleteUser} from ".../controllers/userControllers.js";


const router = express.Router();

router.post("/", validateUSer, createUser);

router.get("/", getUsers);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

export {router};