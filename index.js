require('dotenv').config()

const express = require('express');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const notesRoutes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const notes = await db.getDb().db().collection('notes').find({}).toArray();
    res.render('home', {notes});
})

app.use('/notes', notesRoutes);

db.initDb((err, db) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Database successfully connected!");
        app.listen(PORT, () => {
            console.log(`App is running at PORT ${PORT}`);
        })
    }
})