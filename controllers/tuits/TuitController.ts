import {Request, Response, Express} from "express";
import TuitDao from "../../daos/tuits/TuitDao";
import TuitControllerI from "../../interfaces/tuits/TuitController";

export default class TuitController implements TuitControllerI {

    private static tuitController: TuitController | null = null;
    private static tuitDao: TuitDao = TuitDao.getInstance();

    public static getInstance = (app: Express): TuitController => {
        if(TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController();
            app.post('/tuits', TuitController.tuitController.createTuit);
            app.delete('/tuits/:tuitid', TuitController.tuitController.deleteTuit);
            app.get('/tuits', TuitController.tuitController.findAllTuits);
            app.get('/tuits/:tuitid', TuitController.tuitController.findTuitById);
            app.get('/users/:userid/tuits', TuitController.tuitController.findTuitsByUser);
            app.put('/tuits/:tuitid', TuitController.tuitController.updateTuit);
        }
        return TuitController.tuitController;
    }

    private TuitController() {}

    createTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.createTuit(req.body)
            .then(tuit => res.json(tuit));

    deleteTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.deleteTuit(req.params.tuitid)
            .then(status => res.json(status));

    findAllTuits = (req: Request, res: Response) =>
        TuitController.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));

    findTuitById = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitById(req.params.tuitid)
            .then(tuit => res.json(tuit));

    findTuitsByUser = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitsByUser(req.params.userid)
            .then(tuits => res.json(tuits));

    updateTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.updateTuit(req.params.tuitid, req.body)
            .then(status => res.json(status));
}