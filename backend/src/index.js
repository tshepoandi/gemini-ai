import dotenv from 'dotenv';
import express from 'express';
import promptRoutes from '../routes/promptRoute.js'
dotenv.config()

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', promptRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})