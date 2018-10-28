import bodyparser from 'body-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import errorHandler from 'errorhandler';

export class Server {
    public app: express.Application;

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
    public api() {

    }

    /**
     * Appliaction Routes
     * @class Server
     */
    public config(){
        if (process.env.NODE_ENV === 'dev'){
            this.app.use(logger('dev'));
        }
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({
            extended: true
        }));
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }

    /**
     * Setup routes
     * @class Server
     */
    public routes() {

    }
}
