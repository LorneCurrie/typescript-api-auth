import {Request, Response} from "express";
import {UserDoa} from "../../doa";

const create = (req: Request, res: Response) => {
    req.checkBody("password", "Password is required").notEmpty();
    req.checkBody("firstName", "First Name is required").notEmpty();
    req.checkBody("lastName", "Last Name is required").notEmpty();
    req.checkBody("email", "Email is required").notEmpty();

    req.getValidationResult()
        .then((result: any) => {
            if (result.isEmpty()) {
                UserDoa.create(req.body)
                .then((user) => res.status(201).send(user))
                .catch((error) => res.boom.badRequest(error));
            } else {
                res.boom.badRequest("Validation errors", result.mapped());
            }
        });
};
