/**
 * @file Implements mongoose schema to CRUD
 * documents in the users collection
 */
import mongoose from "mongoose";

/**
 * @property {string} username username of the user
 * @property {string} password password of the user
 * @property {string} firstName first name of the user
 * @property {string} lastName last name of the user
 * @property {string} email email of the user
 * @property {string} profilePhoto profile photo of the user
 * @property {string} headerImage header image of the user
 * @property {AccountType} accountType type of account of the user
 * @property {MaritalStatus} maritalStatus type of account of the user
 * @property {string} biography biography of the user
 * @property {Date} dateOfBirth date of birth of the user
 * @property {Date} joined date of joining of the user
 * @property {Location} location location of the user
 */
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    profilePhoto: String,
    headerImage: String,
    accountType: {type: String, default: 'PERSONAL', enum: ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL']},
    maritalStatus: {type: String, default: 'SINGLE', enum: ['MARRIED', 'SINGLE', 'WIDOWED']},
    biography: String,
    dateOfBirth: Date,
    joined: {type: Date, default: Date.now},
    location: {
        latitude: {type: Number, default: 0.0},
        longitude: {type: Number, default: 0.0},
    }
}, {collection: 'users'});
export default UserSchema;