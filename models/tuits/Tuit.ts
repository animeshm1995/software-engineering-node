/**
 * @typedef Tuit Represents tuit which the user posts and can see
 * @property {string} tuit content of the tuit
 * @property {Date} postedOn the date the tuit was posted
 * @property {string} postedBy user who posted the tuits
 */
export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: String | null = null;
}
