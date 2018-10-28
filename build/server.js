"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const errorhandler_1 = __importDefault(require("errorhandler"));
class Server {
    /**
     * Build the application
     *
     * @class Server
     * @method build
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    static build() {
        return new Server();
    }
    /**
     * Class constructor
     *
     * @class Server
     * @constructor
     *
     */
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.api();
    }
    /**
     * REST API
     *
     * @class Server
     */
    api() {
    }
    /**
     * Appliaction Routes
     * @class Server
     */
    config() {
        if (process.env.NODE_ENV === 'dev') {
            this.app.use(morgan_1.default('dev'));
        }
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
        this.app.use((err, req, res, next) => {
            err.status = 404;
            next(err);
        });
        this.app.use(errorhandler_1.default());
    }
    /**
     * Setup routes
     * @class Server
     */
    routes() {
    }
}
exports.Server = Server;
