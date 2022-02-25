/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>bookmarks</li>
 *     <li>follows</li>
 *     <li>messages</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";

// connect to the database
mongoose.connect('mongodb+srv://cs5500:Spring2022@cluster0.lgzrz.mongodb.net/tuiter?retryWrites=true&w=majority');
import UserController from "./controllers/users/UserController";
import TuitController from "./controllers/tuits/TuitController";
import FollowController from "./controllers/follows/FollowController";
import LikeController from "./controllers/likes/LikeController";
import MessageController from "./controllers/messages/MessageController";
import BookmarkController from "./controllers/bookmarks/BookmarkController";

const app = express();
app.use(bodyParser.json())

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})

// create RESTful Web service API
const userController = UserController.getInstance(app);

const tuitController = TuitController.getInstance(app);

const followController = FollowController.getInstance(app);

const likeController = LikeController.getInstance(app);

const messageController = MessageController.getInstance(app);

const bookmarkController = BookmarkController.getInstance(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;

app.listen(process.env.PORT || PORT);