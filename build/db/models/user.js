"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
exports.default = (sequelize) => {
    const attributes = {
        id: { type: sequelize_1.default.UUID, primaryKey: true, defaultValue: sequelize_1.default.UUIDV4 },
        firstName: { type: sequelize_1.default.STRING, allowNull: true },
        lastName: { type: sequelize_1.default.STRING, allowNull: false },
        email: { type: sequelize_1.default.STRING, allowNull: false },
        password: { type: sequelize_1.default.STRING, allowNull: false },
    };
    return sequelize.define("User", attributes);
};
