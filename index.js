require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4500
const routes = require('./routes/routes')
const mongoData = process.env.DATABASE_URL;
mongoose.connect(mongoData);

const database = mongoose.connection;
database.on('error', ((err)=> {
    console.log(err)
}))

database.once('connected', ()=> {
    console.log('Database Connected')
})

const app = express();

app.use(express.json());

app.use('/', (req,res,next)=> {
    res.status(200).json({message: "this is the basic apli"})
})

app.use('/api', routes)

app.listen(PORT,()=> {
    console.log('Server Started at 4500' )
})