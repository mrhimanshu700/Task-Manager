const mongoose = require('mongoose')

const DB_URL=process.env.db_url;

mongoose.connect(DB_URL)
    .then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log('MongoDB Conn Error...', err);
    })