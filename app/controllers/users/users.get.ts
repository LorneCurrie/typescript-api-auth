import {Request, Response} from "express";
import {UserDoa} from "../../doa";

const getAll = (req: Request, res: Response) =>  UserDoa.findAll()
        .then( (users) => res.status(200).send(users))
        .catch( (error) => res.boom.badRequest(error));

export {
    getAll,
};
