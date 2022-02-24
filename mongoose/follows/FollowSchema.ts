import mongoose, {Schema} from "mongoose";
import Follow from "../../models/follows/Follow";
import UserModel from "../users/UserModel";

const FollowSchema = new mongoose.Schema<Follow>({
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follows"});
export default FollowSchema;