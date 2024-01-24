import {Request, Response} from "express"
import userModel from "../model/userModel"
import bcrypt from "bcrypt"

export const createUser = async(req:Request, res: Response) =>{
    try {
        const {email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)

        const user = await userModel.create({
            email,
            password: hashed
        });

        return res.status(201).json({
            message: "user created",
            data: user,
            status: 201
        })
    } catch (error) {
        return res.status(404).json({
            message: "error creating user",
            status: 404
        })
    }
}

export const viewUSers = async(req:Request, res: Response) =>{
    try {
        const user = await userModel.find();
        return res.status(201).json({
            message: "Viewing all users...",
            data: user,
            status: 201
        })
    } catch (error) {
        return res.status(404).json({
            message: "error creating user",
            status: 404
        })
    }
}

export const viewOneUser = async(req:Request, res: Response) =>{
    try {
        const {userID} = req.params

        const user = await userModel.findById(userID);

        let count: number = 0;
        const countValue = {
            email: user?.email,
            fullName: user?.fullName,
            bio: user?.bio,
            address: user?.address,
            phone: user?.phone,
            avatar: user?.avatar
        }
 
        const myValues = Object.values(countValue);

        for(let i of myValues) {
            if (i !== undefined) {
                count++
            }
        }
          
   
        
        return res.status(201).json({
            message: "Viewing One User...",
            data: user,
            count: 5,
            status: 201
        })
    } catch (error) {
        return res.status(404).json({
            message: "error creating user",
            status: 404
        })
    }
}