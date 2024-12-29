import app from "./app"
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
  }


const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })