import express from 'express'
import balitaRoute from './balita.route.js'
import userRoute from './user.route.js'
import dataBalitaRoute from './dataBalita.route.js'
import artikelRoute from './artikel.route.js'
import mkiaRoute from './mkia.route.js'
import mpasiRoute from './mpasi.route.js'


const router = express()

router.use(balitaRoute)
router.use(userRoute)
router.use(dataBalitaRoute)
router.use(artikelRoute)
router.use(mkiaRoute)
router.use(mpasiRoute)

export default router
