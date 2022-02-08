import Tuit from "../../models/tuits/Tuit";
import TuitModel from "../../mongoose/tuits/TuitModel";
import TuitDaoI from "../../interfaces/tuits/TuitDao";

export default class TuitDao implements TuitDaoI {

    private static tuitDao: TuitDao | null = null;

    public static getInstance = (): TuitDao => {
        if(null == TuitDao.tuitDao) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }
    private constructor() {}

    async createTuit(tuit: Tuit): Promise<Tuit> {
        return await TuitModel.create(tuit);
    }

    async deleteTuit(tid: string): Promise<any> {
        return await TuitModel.deleteOne({id: tid});
    }

    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }

    async findTuitById(tid: string): Promise<any> {
        return await TuitModel.findById(tid);
    }

    async findTuitsByUser(uid: string): Promise<any> {
        return await TuitModel.find({postedBy: uid});
    }

    async updateTuit(tid: string, tuit: Tuit): Promise<any> {
        return await TuitModel.updateOne({_id: tid}, {$set: tuit});
    }

}