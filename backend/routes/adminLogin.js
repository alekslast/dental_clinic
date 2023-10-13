import express from 'express';

import { adminLogin } from '../controllers/adminController.js';

const router = express.Router();


// Admin routes
router.post('/', adminLogin)



export default router;