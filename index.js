const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const featureRoute = require('./src/route/featureRoute.js');
const doctorRoute  = require('./src/route/doctorsRoute.js')
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
// Connect to the database using mongoose
mongoose.connect('mongodb://localhost:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection is successful"))
    .catch(err => console.error("Connection failed:", err));

app.use('/bd-fertility', featureRoute); // Use the router directly
app.use('/doctor-route', doctorRoute); // Use the router directly

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
