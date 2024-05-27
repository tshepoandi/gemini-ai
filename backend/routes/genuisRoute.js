import express from 'express'
import geniusSearchController from '../controllers/geniusController.js'


const router = express.Router()
router.post('/search', geniusSearchController)

export default router