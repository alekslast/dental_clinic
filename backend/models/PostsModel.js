import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
        // category    : {
        //     type        : String,
        //     required    : true
        // },
        // postTitle   : {
        //     type        : String,
        //     required    : true
        // },
        // postBody    : {
        //     type        : String,
        //     required    : true
        // },

        category: String,
        postTitle: String,
        postBody: String

        // postDate    : Date
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export {Post};

