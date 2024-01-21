import express from 'express'
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = process.env.PORT
app.use(express.json())
import 'dotenv/config'
import cors from 'cors'
app.use(cors())

app.get('/', async (req, res) => {
    try {
        const drinks = await DrinkModel.find({})
        res.send(drinks)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const drinks = await DrinkModel.findById(id)
        res.send(drinks)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    const {image,name,price,oldPrice}=req.body
    try {
        const drinks = new DrinkModel({image,name,price,oldPrice})
        await drinks.save()
        res.send(drinks)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    const {id} = req.params
    const {image,name,price,oldPrice}=req.body
    try {
        const drinks = await DrinkModel.findByIdAndUpdate(id,{image,name,price,oldPrice})
        res.send(drinks)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const drinks = await DrinkModel.findByIdAndDelete(id)
        res.send(drinks)
    } catch (error) {
        res.send(error.message)
    }
})
const drinkSchema = new Schema({
    image: String,
    name: String,
    price: Number,
    oldPrice: Number,
})

const DrinkModel = mongoose.model('DrinkModel', drinkSchema);


mongoose.connect(process.env.DB_SECRET_KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})