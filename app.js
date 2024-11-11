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
const reqRoute = require('./router/requirements');
const SearchProd = require('./router/search');
const adminSearch = require('./router/adminsearch');
const Makerequest = require('./router/request');

var path = require('path');


app.use(cors());

app.use(express.json({ limit: '80mb' }));
app.use(express.urlencoded({ limit: '80mb', extended: true }));


app.use('/uploads/products', express.static(__dirname + '/uploads/products'))
app.use('/uploads/categories', express.static(__dirname + '/uploads/categories'))
app.use('/uploads/requirements', express.static(__dirname + '/uploads/requirements/'))


app.use('/api', userRoute);
app.use('/api', catRoute)
app.use('/api', prodRoute)
app.use('/api', cartRoute)
app.use('/api', orderRoute),
app.use('/api/request', reqRoute)
app.use('/api', SearchProd);
app.use('/api', adminSearch);
app.use('/api', Makerequest);


app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = 3000;


app.listen(port, function(req,res){
    console.log('express server running')
})