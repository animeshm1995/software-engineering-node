import {Request, Response} from "express";

export default interface MessageController {

    userMessagesUser (req: Request, res: Response): void;
    userDeletesMessage (req: Request, res: Response): void;
    findMessagesSentByUser (req: Request, res: Response): void;
    findMessagesSentToUser (req: Request, res: Response): void;
};