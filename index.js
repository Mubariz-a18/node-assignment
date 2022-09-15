const express = require('express');
const mongoose = require('mongoose');
const app =express();
const userRouter = require('./routes/userRoute.js');
const adRouter = require('./routes/adsRoute.js')
const port = 3000;

app.use(express.json());


//server & database
const startServer = () => {
    
    app.listen(port,() => {
        console.log(`server started on port: ${port}`)
    })

    const mongoUrl  = 'mongodb://127.0.0.1/my_database';
    mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => console.log(`connected to database: ${mongoUrl}`))
    .catch((e) => console.log(`error connecting to database: ${mongoUrl}`))
}
startServer();


//routes
app.use('/',userRouter)
app.use('/',adRouter)
