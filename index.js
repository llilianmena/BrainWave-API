require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');
const { connect } = require('./config/connection');

const app=express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);

(async () => {
    await connect();
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})();

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection at:', promise, `reason: ${reason}`);
  });