/**
 * @file Declares API for Tuits related data access object methods
 */
import Tuit from "../../models/tuits/Tuit";

export default interface TuitDaoI {

    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    findAllTuits(): Promise<Tuit[]>;

    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @param {string} userid  Primary key of user whose tuits are to be fetched
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    findTuitsByUser(uid: string): Promise<Tuit[]>;

    /**
     * Uses TuitModel to retrieve a tuit document from tuit collection
     * @param {string} tid  Primary key of tuit to be fetched
     * @returns Promise To be notified when the tuit is retrieved from
     * database
     */
    findTuitById(tid: string): Promise<Tuit>;

    /**
     * Inserts tuit instance into the database
     * @param {Tuit} tuit Tuit to be posted by the user
     * @returns Promise To be notified when tuit is inserted into the database
     */
    createTuit(tuit: Tuit): Promise<Tuit>;

    /**
     * Updates a tuit in the database.
     * @param {string} tid  Primary key of tuit which has to be deleted
     * @param {Tuit} tuit  Content of tuit
     * @returns Promise To be notified when tuit is updated in the database
     */
    updateTuit(tid: string, tuit: Tuit): Promise<any>;

    /**
     * Removes tuit from the database.
     * @param {string} tid  Primary key of tuit which has to be deleted
     * @returns Promise To be notified when tuit is removed from the database
     */
    deleteTuit(tid: string): Promise<any>;
}
