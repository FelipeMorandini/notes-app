const mongoose = require('mongoose')
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const connectDb = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB successfully connected.");
    } catch(error) {
        console.error(`MongoDB connection failed.\n${error.message}`);
        process.exit(1);
    };
};

module.exports = connectDb;