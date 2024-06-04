import express from 'express'
import { rapidForGenius } from '../controllers/limitedGeniusController.js'

const router = express.Router()
router.get('/rapid', rapidForGenius)

export default router