require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, (error) => {
    if(error) console.log(`Ocorreu um erro: ${error}`);
    console.log(`Application is running at PORT ${PORT}`)
});