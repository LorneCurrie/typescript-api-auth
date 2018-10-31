import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import express from "express";
import * as boom from "express-boom";
import expressValidator from "express-validator";
import logger from "morgan";
import path from "path";

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

    public app: express.Application;

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
        this.api();
    }

    /**
     * REST API
     *
     * @class Server
     */
    public api() { }

    /**
     * Application Routes
     * @class Server
     */
    public config() {
        if (process.env.NODE_ENV === "dev") {
            this.app.use(logger("dev"));
        }
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        this.app.use(boom());
        this.app.use(expressValidator());
    }

    /**
     * Setup routes
     * @class Server
     */
    public routes() {}
}
