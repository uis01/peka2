<<<<<<< HEAD
import express from 'express'
import { getUser, getUserById, getUserTest, insertUser,updateUser, deleteUser} from '../controller/user.controller.js'

// import { verifyUser, adminOnly } from '../middleware/authUser.js'

const router = express.Router()

router.get('/user',  getUser)
router.get('/user/:id_user', getUserById)
router.get('/userfilter', getUserTest)
router.post('/user', insertUser)
router.put('/user/:id_user', updateUser)
router.delete('/user/:id_user', deleteUser)


export default router
=======
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
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e
