const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const { DB_HOST, PORT = 5000 } = process.env;
const DB_HOST = 'mongodb+srv://Bonefadze:0987654321@cluster0.wt7yyxq.mongodb.net/db-contacts?retryWrites=true&w=majority'
const PORT = 5000;

const app = require('./app');

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT, () => console.log(`Database connection port ${PORT} successful`)))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });