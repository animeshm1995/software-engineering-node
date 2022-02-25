import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

/**
 * @typedef User Represents user who is creating his account
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
export default class User {
    private username: string = '';
    private password: string = '';
    private firstName: string | null = null;
    private lastName: string | null = null;
    private email: string = '';
    private profilePhoto: string | null = null;
    private headerImage: string | null = null;
    private accountType: AccountType = AccountType.Personal;
    private maritalStatus: MaritalStatus = MaritalStatus.Single;
    private biography: string | null = null;
    private dateOfBirth: Date | null = null;
    private joined: Date = new Date();
    private location: Location | null = null;
}
