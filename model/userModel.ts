import { Schema, Document, model } from "mongoose";

interface iUser {
    fullName: string;
    address: string;
    email: string;
    password: string;
    bio: string;
    phone: string;
    avatar: string;
    avatarID: string;
    blogs: Array<{}>;
}

interface iUserData extends iUser, Document{}

const userModel = new Schema<iUserData>({
    fullName: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    phone: {
        type: String
    },
    avatar: {
        type: String
    },
    avatarID: {
        type: String
    },
    blogs: [{
        type: String,
        ref: "blogs"
    }],
},
{
    timestamps: true
}
)

export default model<iUserData>("users", userModel);