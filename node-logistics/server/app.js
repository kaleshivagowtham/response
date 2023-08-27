const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 5000;

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://0.0.0.0:27017/delivery-db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.connection.on('connected' , () => {
    console.log("Db connected successfully");
})
mongoose.connection.on('error' , (err) => {
    console.log("Error occured :",err);
})

app.use(express.json());
app.use(require('./routes/order'));
app.use(require('./routes/items'));
app.use(require('./routes/delivery'))

app.get('/' , (req,res) => {
    console.log("All ok");
    res.status(200).send("All ok!");
})

app.listen(PORT , () => {
    console.log(`Server started on PORT: ${PORT}...`);
});