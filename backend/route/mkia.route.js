import express from 'express'
import { getMkia, getMkiaById, getMkiaTest, insertMkia, updateMkia, deleteMkia} from '../controller/mkia.controller.js'

const router = express.Router()

router.get('/mkia', getMkia)
router.get('/mkia/:id_mkia', getMkiaById)
router.get('/mkiafilter', getMkiaTest)
router.post('/mkia', insertMkia)
router.put('/mkia/:id_mkia', updateMkia)
router.delete('/mkia/:id_mkia', deleteMkia)


export default router
