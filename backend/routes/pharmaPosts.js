import express from 'express';

import { 
    createPost, 
    getPosts, 
    getSinglePost, 
    deletePost, 
    updatePost

} from '../controllers/postController.js';

const router = express.Router();


// User routes
router.get('/', getPosts)

router.get('/:id', getSinglePost)

router.post('/', createPost)

router.delete('/:id', deletePost)

router.patch('/:id', updatePost)



export default router;