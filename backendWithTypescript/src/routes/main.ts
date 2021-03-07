import { Router } from 'express';
import controller from '../controller/controller'
const router = Router();
router.get('/',controller.getAllUsers)
router.get('/user/:id',controller.getDetail)
export default router;