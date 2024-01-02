const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const featureRoute = require('./src/Module/Features/featureRoute.js');
const doctorRoute  = require('./src/Module//Doctors/doctorsRoute.js')
const usersRoute  = require('./src/Module/Users/userRoute')
const blogRoute = require('./src/Module/Blog/blogRoute.js')
// const allGalleryRoute = require('./src/Module/Gallery/galleryRoute.js')

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
// Connect to the database using mongoose
mongoose.connect('mongodb://bdhospital:PC3dOkmyb9KKcWTZ@ac-onjpk5k-shard-00-00.xskcn3u.mongodb.net:27017,ac-onjpk5k-shard-00-01.xskcn3u.mongodb.net:27017,ac-onjpk5k-shard-00-02.xskcn3u.mongodb.net/BdFertility?ssl=true&replicaSet=atlas-g07jbs-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection is successful"))
    .catch(err => console.error("Connection failed:", err));


app.use('/bd-fertility', featureRoute); // Use the router directly
app.use('/doctor-route', doctorRoute); // Use the router directly
app.use('/user-route', usersRoute); // Use the router directly
app.use('/blog-route', blogRoute); // Use the router directly
// app.use('/Gallery-route', allGalleryRoute); // Use the router directly

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
