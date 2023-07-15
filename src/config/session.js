const session = require('express-session');
const flash = require('connect-flash');

const sessionMiddleware = (app) => {
    app.use(session({
        secret: process.env.SECRET_KEY,
        resave: true,
        saveUninitialized: true
    }));

    app.use(flash());

    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        next();
    });
}

module.exports = sessionMiddleware;