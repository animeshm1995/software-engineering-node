/**
 * @file Declares Like data type representing relationship between
 * users, as in user follows a tuit
 */
import User from "../users/User";

/**
 * @typedef Follow Represents follows relationship between a user and a user,
 * as in a user follows another user.
 * @property {User} userFollowed User who has been folllowed by the current user
 * @property {User} userFollowing User
 */

export default interface Follow {
    userFollowed: User,
    userFollowing: User
};