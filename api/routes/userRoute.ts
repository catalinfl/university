import express from "express"
import { getUser, getUsers, postUser } from "../controllers/userRegistration";

const router = express.Router();

router.post('/', postUser)
router.get('/', getUsers)
router.get('/:id/', getUser)


export default router;