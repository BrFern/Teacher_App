import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import materialsRoutes from './routes/materials.js';

app.use('/materials', materialsRoutes)

const app = express();

//General setup to send requests

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})) //This is limiting the amount of mb for images. 

app.use(cors());

//Connecting to mongodb 
const CONNECTION_URL= "mongodb+srv://BaileyFern:testing123@sei.tz0cct9.mongodb.net/?retryWrites=true&w=majority"

//Port 
const PORT = process.env.PORT || 5000;

//Mongooe connection
mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

mongoose.set('strictQuery', true);
