require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database/mongoose')
const userRoute = require('./router/user');
const catRoute = require('./router/category');
const prodRoute = require('./router/product');
const orderRoute = require('./router/order');
const cartRoute = require('./router/cart');

var path = require('path');


app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.use('/uploads/products', express.static(__dirname + '/uploads/products'))


app.use('/api', userRoute);
app.use('/api', catRoute)
app.use('/api', prodRoute)
app.use('/api', cartRoute)
app.use('/api', orderRoute)

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = 3000;


app.listen(port, function(req,res){
    console.log('express server running')
})