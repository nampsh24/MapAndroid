require("dotenv").config();
const express = require('express'); // Import thư viện Express
const app = express(); // Tạo một instance của Express


const connectDB = require("./db/connect");

const authRoutes = require('./routes/authRoute')

// Middleware cơ bản để parse JSON
app.use(express.json());

// Định nghĩa một route cơ bản tại đường dẫn `/`
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/v1/auth',authRoutes)

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`SERVER IS LISTENING ON PORT ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

