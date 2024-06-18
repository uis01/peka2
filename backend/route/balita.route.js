import express from 'express'
import { getBalita, getBalitaById, getBalitaTest, insertBalita, updateBalita, deleteBalita} from '../controller/balita.controller.js'

const router = express.Router()

router.get('/balita', getBalita)
router.get('/balita/:id_balita', getBalitaById)
router.get('/balitafilter', getBalitaTest)
router.post('/balita', insertBalita)
router.put('/balita/:id_balita', updateBalita)
router.delete('/balita/:id_balita', deleteBalita)


export default router
