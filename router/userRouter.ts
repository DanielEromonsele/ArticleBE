import { Router } from "express";
import { createUser, viewOneUser, viewUSers } from "../controller/userController";



const router: Router = Router();

router.route("/create-user").post(createUser)
router.route("/view-all-user").get(viewUSers)
router.route("/view-One-user").get(viewOneUser)


export default router;