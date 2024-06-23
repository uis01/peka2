import express from 'express'
import { getMpasi, getMpasiById, getMpasiTest, insertMpasi, updateMpasi, deleteMpasi} from '../controller/mpasi.controller.js'

const router = express.Router()

router.get('/mpasi', getMpasi)
router.get('/mpasi/:id_mpasi', getMpasiById)
router.get('/mpasifilter', getMpasiTest)
router.post('/mpasi', insertMpasi)
router.put('/mpasi/:id_mpasi', updateMpasi)
router.delete('/mpasi/:id_mpasi', deleteMpasi)


export default router
