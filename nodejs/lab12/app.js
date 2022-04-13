const express = require('express');
const userRouter = require('./src/user-router')
const productRouter = require('./src/product-router')
const path = require('path')
const ejs = require('ejs')

const router = express.Router()
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.engine('html', ejs.renderFile)
app.set('view engine', 'html');


app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.use('/users', userRouter)
app.use('/products', productRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(function(err, req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '500.html'));
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});