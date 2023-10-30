import express from "express"


import Auth from '../middleware/check-auth';
import{
    createUser,
    findUser,
    updateUser,
    deleteUser

} from "../controller/user"

const router = express.Router();

router.post("/", Auth, createUser)

router.get("/", findUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser )

export default router;