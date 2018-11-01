import Sequelize from "sequelize";
import UserFactory from "./user";

import { ENVIRONMENT } from "../../constants/index";
const config = require("../config/config.json");
import {IUserAttributes, IUserInstance} from "./user";

interface IDbConnection {
    User: Sequelize.Model<IUserInstance, IUserAttributes>;
    [key: string]: any;
}

const env = process.env.NODE_ENV || ENVIRONMENT.DEVELOPMENT;
const dbConfig = config[env];
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const db: IDbConnection = {
    Sequelize,
    User: UserFactory(sequelize),
    sequelize,
};

Object.keys(db).forEach((key) => {
if (db[key].associate) {
    db[key].associate(db);
}
});

export default db;
