import FollowDaoI from "../../interfaces/follows/FollowDao";
import FollowModel from "../../mongoose/follows/FollowModel";
import Follow from "../../models/follows/Follow";

export default class FollowDao implements FollowDaoI {

    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}


    userFollowsUser = async (uid: string, userFollowedId: string): Promise<any> =>
        FollowModel.create({userFollowed: uid, userFollowing: userFollowedId});

    userUnfollowsUser = async (uid: string, userFollowedId: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uid, userFollowing: userFollowedId});

    getUserFollowingList = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();

     getUserFollowerList = async (userId: string): Promise<Follow[]> =>
         FollowModel
             .find({userFollowing: userId})
             .populate("userFollowed")
             .exec();

}