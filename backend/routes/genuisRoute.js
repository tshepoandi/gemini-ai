import express from 'express'
import geniusSearchController from '../controllers/geniusController.js'


const router = express.Router()
router.get('/search', geniusSearchController)

export default router