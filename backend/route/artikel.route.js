import express from 'express'
import { getArtikel, getArtikelById, getArtikelTest, insertArtikel, updateArtikel, deleteArtikel} from '../controller/artikel.controller.js'

const router = express.Router()

router.get('/artikel', getArtikel)
router.get('/artikel/:id_Artikel', getArtikelById)
router.get('/artikelfilter', getArtikelTest)
router.post('/artikel', insertArtikel)
router.put('/artikel/:id_Artikel', updateArtikel)
router.delete('/artikel/:id_Artikel', deleteArtikel)


export default router
