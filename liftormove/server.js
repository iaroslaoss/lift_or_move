const app = require('./app');
const connectDB = require('./config/dbConfig');
require('dotenv').config();

const PORT = process.env.BACKEND_PORT || 5001;

// Connect to the database
connectDB();

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
