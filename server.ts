import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://cs5500:Spring2022@cluster0.lgzrz.mongodb.net/tuiter?retryWrites=true&w=majority');
import UserController from "./controllers/users/UserController";
import TuitController from "./controllers/tuits/TuitController";
const app = express();
app.use(bodyParser.json())

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})

const userController = UserController.getInstance(app);

const tuitController = TuitController.getInstance(app);

const PORT = 4000;

app.listen(process.env.PORT || PORT);