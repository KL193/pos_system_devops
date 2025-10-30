const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env', quiet: true });
const mongoose = require('mongoose');
let cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors())

const UserRoute = require('./routes/UserRoute');
const CustomerRoute = require('./routes/CustomerRoute');
const ProductRoute = require('./routes/ProductRoute');
const OrderRoute = require('./routes/OrderRoute');


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DB_URI || 'mongodb+srv://KL193:KAV%40123kav@cluster0.fvbxpjr.mongodb.net/pos_system_devops_db?appName=Cluster0';

mongoose.connect(MONGO_URI).then(()=>{
    console.log('Mongo db connected...');

    app.listen(PORT, ()=>{
        console.log(`Server Started And Running on port ${PORT}`)
    });

}).catch((error)=>console.error('Db Error : ',error));

app.get('/test', (req,resp)=>{
    return resp.json({'message':'Server Stated..'});
});

app.use('/api/v1/users', UserRoute); // http://localhost:3000/api/v1/users/signup
app.use('/api/v1/customers', CustomerRoute);
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/orders', OrderRoute);
app.use('/api/v1/orders', OrderRoute);