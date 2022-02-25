/**
 * @file Declares API for Likes related data access object methods
 */
import Like from "../../models/likes/Like";

export default interface LikeDao {

    /**
     * Uses LikeModel to retrieve all like documents from likes collection
     * @returns Promise To be notified when the user who like that tuit are retrieved from
     * database
     */
    findAllUsersThatLikedTuit (tuitid: string): Promise<Like[]>;

    /**
     * Uses LikeModel to retrieve all like documents from likes collection
     * @returns Promise To be notified when the tuits which are liked by the user are retrieved from
     * database
     */
    findAllTuitsLikedByUser (userid: string): Promise<Like[]>;

    /**
     * Deletes like instance into the database
     * @param {string} userid Primary key of user who removes the like
     * @param {string} tuitid Primary key of tuit which is to be unliked
     * @returns Promise To be notified when like is deleted from the database
     */
    userUnlikesTuit (tuitid: string, userid: string): Promise<any>;

    /**
     * Inserts like instance into the database
     * @param {string} userid Primary key of user who adds the like
     * @param {string} tuitid Primary key of tuit which is to be liked
     * @returns Promise To be notified when like is inserted into the database
     */
    userLikesTuit (tuitid: string, userid: string): Promise<Like>;
};