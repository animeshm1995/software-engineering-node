/**
 * @file Implements mongoose schema to CRUD
 * documents in the tuits collection
 */
import mongoose from "mongoose";

/**
 * @typedef Tuit Represents tuit which the user posts
 * @property {String} tuit tuit to be posted
 * @property {Date} postedOn Date of posting tuit
 * @property {string} postedBy Name of the user who posted the tuit
 */
const TuitSchema = new mongoose.Schema( {
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now, required: true},
    postedBy: {type: String, ref: "UserModel", required: true}
}, {collection: "tuits"});

export default TuitSchema;