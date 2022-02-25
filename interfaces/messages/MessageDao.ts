import Message from "../../models/messages/Message";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface MessageDao {

    userMessagesUser ( from_uid: string,to_user: string, message: Message): Promise<Message>;
    userDeletesMessage ( message_id: String): Promise<any>;
    findMessagesSentByUser( username: string): Promise<Message[]>;
    findMessagesSentToUser( username: string) : Promise<Message[]>;

};