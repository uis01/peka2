import express from 'express'
import { getDataBalita, getDataBalitaById, getDataBalitaTest, insertDataBalita, updateDataBalita, deleteDataBalita} from '../controller/dataBalita.controller.js'

const router = express.Router()

router.get('/dataBalita', getDataBalita)
router.get('/dataBalita/:id_balita', getDataBalitaById)
router.get('/dataBalitafilter', getDataBalitaTest)
router.post('/dataBalita', insertDataBalita)
router.put('/dataBalita/:id_balita', updateDataBalita)
router.delete('/dataBalita/:id_balita', deleteDataBalita)


export default router
