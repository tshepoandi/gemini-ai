import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import promptRoutes from '../routes/promptRoute.js'
import geniusRoutes from '../routes/genuisRoute.js'
import rapidGenius from '../routes/rapidApi.js'
dotenv.config()

const app = express();
const port = process.env.PORT || 3000

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/gemini', promptRoutes)
app.use('/genius', geniusRoutes)
app.use('/rapid', rapidGenius)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})