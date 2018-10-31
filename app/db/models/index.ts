import Sequelize from "sequelize";
import UserFactory from "./user";

const config = require("../config/config");
import {IUserAttributes, IUserInstance} from "./user";

interface IDbConnection {
    User: Sequelize.Model<IUserInstance, IUserAttributes>;
    [key: string]: any;
}

const env = process.env.NODE_ENV || "development";
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
