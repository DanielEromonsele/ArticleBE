import { Schema, Document, model, Types } from "mongoose";

interface iBlog {
    title: string;
    category: string;
    content: string;
    authorName: string;
    displayImage: string;
    displayImageID: string;
   

    user: {};
}

interface iBlogData extends iBlog, Document{}

const blogModel = new Schema<iBlogData>({
    title: {
        type: String
    },
    category: {
        type: String
    },
    content: {
        type: String
    },
    authorName: {
        type: String
    },
    displayImage: {
        type: String
    },
    displayImageID: {
        type: String
    },
    user: [{
        type: Types.ObjectId,
        ref: "users"
    }],

},
{
    timestamps: true,
}
)

export default model<iBlogData>("blogs", blogModel);