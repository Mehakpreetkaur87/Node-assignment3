import express from "express";

import { createUser, getUsers, getUserById, deleteUsr} from "../controllers/userControllers.js";

import { validateUser } from "../middlewares/validateUser.js";

const router = express.Router();
const userRoutes = router;
router.post("/", validateUser, createUser);

router.get("/", getUsers);

router.get("/:id", getUserById);

router.delete("/:id", deleteUsr);

export {userRoutes};