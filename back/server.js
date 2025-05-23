import express from 'express';
import cors from 'cors';
import {connectDb} from "./config/config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors("*"))

connectDb();


app.listen(5000, () => {
    console.log('Server listening on port 5000.');
} );