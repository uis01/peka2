import express from 'express'
import { getUser, getUserById, getUserTest, insertUser,updateUser, deleteUser} from '../controller/user.controller.js'

const router = express.Router()

router.get('/user', getUser)
router.get('/user/:id_user', getUserById)
router.get('/userfilter', getUserTest)
router.post('/user', insertUser)
router.put('/user/:id_user', updateUser)
router.delete('/user/:id_user', deleteUser)


export default router
