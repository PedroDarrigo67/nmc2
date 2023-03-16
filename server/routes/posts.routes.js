import {Router} from 'express';
import {getPosts,  getPost} from '../controller/posts.controllers.js';
const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);


export default router
