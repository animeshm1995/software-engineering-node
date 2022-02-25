/**
 * @file Implements mongoose schema to CRUD
 * documents in the tuits collection
 */
import mongoose from "mongoose";

const TuitSchema = new mongoose.Schema( {
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now, required: true},
    postedBy: {type: String, ref: "UserModel", required: true}
}, {collection: "tuits"});

export default TuitSchema;