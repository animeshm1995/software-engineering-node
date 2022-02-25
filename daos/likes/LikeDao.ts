/**
 * @file Implements API for Likes related data access object methods
 */
import LikeDaoI from "../../interfaces/likes/LikeDao";
import LikeModel from "../../mongoose/likes/LikeModel";
import Like from "../../models/likes/Like";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes
 * @property {LikeDao} likeDao Private single instance of LikeDao
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;

    /**
     * Creates singleton dao instance
     * @return LikeDao
     */
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }

    private constructor() {}

    /**
     * Uses LikeModel to retrieve all like documents from likes collection
     * @returns Promise To be notified when the user who like that tuit are retrieved from
     * database
     */
    findAllUsersThatLikedTuit = async (tuitid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tuitid})
            .populate("likedBy")
            .exec();

    /**
     * Uses LikeModel to retrieve all like documents from likes collection
     * @returns Promise To be notified when the tuits which are liked by the user are retrieved from
     * database
     */
    findAllTuitsLikedByUser = async (userid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: userid})
            .populate("tuit")
            .exec();

    /**
     * Inserts like instance into the database
     * @param {string} userid Primary key of user who adds the like
     * @param {string} tuitid Primary key of tuit which is to be liked
     * @returns Promise To be notified when like is inserted into the database
     */
    userLikesTuit = async (userid: string, tuitid: string): Promise<any> =>
        LikeModel.create({tuit: tuitid, likedBy: userid});

    /**
     * Deletes like instance into the database
     * @param {string} userid Primary key of user who removes the like
     * @param {string} tuitid Primary key of tuit which is to be unliked
     * @returns Promise To be notified when like is deleted from the database
     */
    userUnlikesTuit = async (userid: string, tuitid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tuitid, likedBy: userid});
}