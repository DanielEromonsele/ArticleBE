import { Router } from "express";
import { createBlog, viewBlogs, viewOneBlog } from "../controller/blogController";
import multer from "multer";

const upload = multer().single("upload")



const router: Router = Router();

router.route("/create-blog").post(createBlog)
router.route("/view-all-blogs").get(viewBlogs)
router.route("/view-One-blog").get(viewOneBlog)


export default router;