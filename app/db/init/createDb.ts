import mysql from "mysql";
import winston from "winston";
import * as config from "../config/index";

import { ENVIRONMENT } from "../../constants/index";

const logger: winston.Logger = winston.createLogger({transports: [new winston.transports.Console()]});

const env = process.env.NODE_ENV || ENVIRONMENT.DEVELOPMENT;
const dbConfig = config[env];

const connection = mysql.createConnection({
  host: dbConfig.host,
  password: dbConfig.password,
  user: dbConfig.username,
});
connection.connect();

connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database};`, (err, results) => {
    logger.log("info", `DB '${dbConfig.database}' Created!`);
    connection.destroy();
    process.exit();
});
