"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const app = express_1.default();
const port = (process.env.PORT) ? parseInt(process.env.PORT, 10) : 3000;
app.use('/welcome', controllers_1.WelcomeController);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
