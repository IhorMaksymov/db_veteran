const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { DB_HOST, PORT = 3000 } = process.env;

const app = require('./app');

const start = async () => {
    const data = await mongoose.connect(DB_HOST);

    try {
        if (data) {
            app.listen(PORT, () => console.log(`Server works at port ${PORT}`));
        }
    } catch (error) { 
        console.log(error.message);
        process.exit(1);
    }
}
start();