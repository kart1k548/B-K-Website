const express = require('express');

const path = require('path');

const app = express();

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const productRoutes = require('./routes/product');
const contactRoutes = require('./routes/contact');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

app.use(express.static(path.join(__dirname,'public')));

app.use('/about',aboutRoutes);
app.use('/product',productRoutes);
app.use('/contact',contactRoutes);
app.use('/login',loginRoutes);
app.use('/signup',signupRoutes);
app.use(homeRoutes);

app.listen(5001,()=>{
    console.log('Listening to 5001');
});
