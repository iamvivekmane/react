require('dotenv').config();
const mongoose = require('mongoose');
const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch((err) => console.log(err));
};
module.exports = connectToMongo;



