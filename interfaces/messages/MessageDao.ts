import Message from "../../models/messages/Message";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface MessageDao {

    userMessagesUser ( message: Message): Promise<Message>;
    userDeletesMessage ( userId: string): Promise<any>;
    findMessagesSentByUser( username: string): Promise<Message[]>;
    findMessagesSentToUser( username: string) : Promise<Message[]>;

};