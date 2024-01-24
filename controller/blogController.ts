import { Request, Response } from "express";
import { HTTP } from "../utils/enums";
import userModel from "../model/userModel";
import blogModel from "../model/blogModel";
import { Types } from "mongoose";


export const createBlog = async(req: Request, res: Response)=>{
    try {
        const {userID} = req.params
        const {title, content, category} = req.body
        const user = await userModel.findById(userID)

      const {secure_url, public_id}:any = stream(req)

      console.log(secure_url, public_id)
        
        if (user) {
            const blog =  await blogModel.create({
                authorName: user.fullName,
                title: title,
                content: content,
                category: category,
                displayImage: secure_url,
                displayImageID: public_id
            })

            user?.blogs.push(new Types.ObjectId(blog.id))
            user.save()
        }
        return res.status(201).json({
            message: "user created",
            data: user,
            status: 201
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error creating blog",
            status: HTTP.BAD_REQUEST
        })
    }
}



export const viewBlogs = async(req:Request, res: Response) =>{
    try {

        const blogs = await userModel.find();
        
        return res.status(201).json({
            message: "Viewing All Blogs...",
            status: 201
        })
    } catch (error) {
        return res.status(404).json({
            message: "error viewing blog",
            status: 404
        })
    }
}

export const viewOneBlog = async(req:Request, res: Response) =>{
    try {
        const {userID} = req.params

       const blog = await userModel.findById(userID).populate({
        path: "blogs",
        options: {
            sort: {
                createdAt: -1,
            }
        }
       })
         
        return res.status(201).json({
            message: "Viewing One Blog...",
            data: blog,
            status: 200
        })
    } catch (error) {
        return res.status(404).json({
            message: "error viewing blog",
            status: 404
        })
    }
}

function stream(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>): any {
    throw new Error("Function not implemented.");
}

