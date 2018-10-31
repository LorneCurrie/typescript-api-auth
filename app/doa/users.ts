import Promise from "bluebird";
import * as uuid from "uuid";
import db from "../db/models/index";

import { IUserInstance } from "./../db/models/user";

import {hashPassword} from "../helpers/users";

function create(user: IUserInstance): Promise<any> {
    return db.User.create({
        email: user.email,
        firstName: user.firstName,
        id: uuid.v4(),
        lastName: user.lastName,
        password: hashPassword(user.password),
    });
}

export {
    create,
};
