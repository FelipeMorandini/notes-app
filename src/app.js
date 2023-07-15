require('dotenv').config()

const express = require('express');
const connectDb = require('./config/dbConnection');
const sessionMiddleware = require('./config/session');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();
sessionMiddleware(app);

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.json());

app.use('/notes', noteRoutes);

app.get('/', async (req, res) => {
    const notes = await db.getDb().db().collection('notes').find({}).toArray();
    res.render('home', {notes});
})


app.listen(PORT, () => console.log(`App is running at PORT ${PORT}`));