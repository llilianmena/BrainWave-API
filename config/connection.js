const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || "mongodb://localhost/social-network-api";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connect() {
    await mongoose.connect(uri, clientOptions);
}
exports.connect = connect;