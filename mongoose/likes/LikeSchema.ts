/**
 * @file Implements mongoose schema to CRUD
 * documents in the likes collection
 */
import mongoose, {Schema} from "mongoose";
import Like from "../../models/likes/Like";

/**
 * @typedef Like Represents like on a tuit
 * @property {ObjectId} tuit tuits id
 * @property {ObjectId} likedBy user id
 */
const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;