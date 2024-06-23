import express from 'express'
import { getUser, getUserById, getUserTest, insertUser,updateUser, deleteUser} from '../controller/user.controller.js'

import { verifyUser, adminOnly } from '../middleware/authUser.js'

const router = express.Router()

router.get('/user', verifyUser, getUser)
router.get('/user/:id_user', verifyUser, getUserById)
router.get('/userfilter', verifyUser, getUserTest)
router.post('/user', verifyUser, insertUser)
router.put('/user/:id_user', verifyUser, updateUser)
router.delete('/user/:id_user', verifyUser, adminOnly, deleteUser)


export default router
