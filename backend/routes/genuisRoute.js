import express from 'express'

import { searchController, getSongController, } from '../controllers/geniusController.js'


const router = express.Router()
router.post('/search', searchController)
router.post('/song', getSongController)
    // router.post('/song/:id')

export default router