import { Post } from '../models/PostsModel.js';




// get all posts
const getPosts = async (req, res) => {
    // const path  = res.req.rawHeaders[15].substring(22);
    const path  = res.req.rawHeaders[15].split('/')[3]
    const posts = await Post.find({category: path}).sort({createdAt: -1})
    

    res.status(200).json(posts);
}


// get single post
const getSinglePost = async (req, res) => {
    const { id } = req.params
    const singlePost = await Post.findById(id)

    if (!singlePost) {
        return res.status(404).json({error: 'Post does not exist'})
    }

    res.status(200).json(singlePost)
}




// create new post
const createPost = async (req, res) => {
    const { category, postTitle, postBody } = req.body;


    // add doc to DB
    try {
        const post = await Post.create({
            category,
            postTitle,
            postBody
        })
        res.status(200).json(post)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}



// delete post
const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOneAndDelete({_id: id});

    if (!post) {
        return res.status(404).json({error: "No post found"})
    }

    res.status(200).json(post)
}



// update post
const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOneAndUpdate(
        { _id: id },
        { ...req.body }
    );

    if (!post) {
        return res.status(404).json({error: "No post found"})
    }

    res.status(200).json(post)    
}



export { 
    createPost, 
    getPosts, 
    getSinglePost, 
    deletePost, 
    updatePost
};
