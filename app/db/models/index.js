
import * as Sequelize from "sequelize"
import UserFactory from "./user";

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize)
}

Object.values(db).forEach(modle: any => {
  if (model.associate) {
      model.associate(db)
  }
});
export default db;
