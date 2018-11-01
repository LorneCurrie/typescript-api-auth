import {json, urlencoded} from "body-parser";
import errorHandler from "errorhandler";
import express from "express";
import { Express, NextFunction, Request, Response } from "express";
import boom from "express-boom";
import expressValidator from "express-validator";
import logger from "morgan";
import * as winston from "winston";
import * as constants from "./constants/index";
import * as routes from "./routes/index";

export class Server {

    /**
     * Build the application
     *
     * @class Server
     * @method build
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static build(): Server {
        return new Server();
    }

    public app: Express;

    /**
     * Class constructor
     *
     * @class Server
     * @constructor
     *
     */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /**
     * Application Routes
     * @class Server
     */
    public config() {
        if (process.env.NODE_ENV === constants.ENVIRONMENT.DEVELOPMENT) {
            this.app.use(logger("dev"));
        }
        // Express Middleware
        // Body-parser
        this.app.use(json());
        this.app.use(urlencoded({
            extended: true,
        }));
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            err.status = 404;
            next(err);
        });
        // Error Handler
        this.app.use(errorHandler());
        // Express Boom
        this.app.use(boom());
        // Express Validator
        this.app.use(expressValidator());
    }

    /**
     * Setup routes
     * @class Server
     */
    public routes() {
        routes.initRoutes(this.app);
    }
}
