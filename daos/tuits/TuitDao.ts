/**
 * @file Implements API for Tuits related data access object methods
 */
import Tuit from "../../models/tuits/Tuit";
import TuitModel from "../../mongoose/tuits/TuitModel";
import TuitDaoI from "../../interfaces/tuits/TuitDao";
import UserModel from "../../mongoose/users/UserModel";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Tuits
 * @property {TuitDao} tuitDao Private single instance of TuitDao
 */
export default class TuitDao implements TuitDaoI {

    private static tuitDao: TuitDao | null = null;

    /**
     * Creates singleton dao instance
     * @return TuitDao
     */
    public static getInstance = (): TuitDao => {
        if(null == TuitDao.tuitDao) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }

    private constructor() {}

    /**
     * Inserts tuit instance into the database
     * @param {Tuit} tuit Tuit to be posted by the user
     * @returns Promise To be notified when tuit is inserted into the database
     */
    async createTuit(tuit: Tuit): Promise<Tuit> {
        return await TuitModel.create(tuit);
    }

    /**
     * Removes tuit from the database.
     * @param {string} tid  Primary key of tuit which has to be deleted
     * @returns Promise To be notified when tuit is removed from the database
     */
    async deleteTuit(tid: string): Promise<any> {
        return await TuitModel.deleteOne({_id: tid});
    }

    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }

    /**
     * Uses TuitModel to retrieve a tuit document from tuit collection
     * @param {string} tid  Primary key of tuit to be fetched
     * @returns Promise To be notified when the tuit is retrieved from
     * database
     */
    async findTuitById(tid: string): Promise<any> {
        return await TuitModel.findById(tid);
    }

    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @param {string} userid  Primary key of user whose tuits are to be fetched
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    async findTuitsByUser(uid: string): Promise<any> {
        return await TuitModel.find({postedBy: uid});
    }

    /**
     * Updates a tuit in the database.
     * @param {string} tid  Primary key of tuit which has to be updated
     * @param {Tuit} tuit  Content of tuit
     * @returns Promise To be notified when tuit is updated in the database
     */
    async updateTuit(tid: string, tuit: Tuit): Promise<any> {
        return await TuitModel.updateOne({_id: tid}, {$set: tuit});
    }

    deleteTuitsByPostedBy = async (postedby: string): Promise<any> =>
        TuitModel.deleteMany({postedby});
}