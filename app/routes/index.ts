import {Express, Request, Response} from "express";
import * as winston from "winston";
import * as UserRoutes from "./users";

export function initRoutes(app: Express) {
    winston.log("info", "--> Initialize the routes");

    app.get("/api", (req: Request, res: Response) => res.send(200).send({
        message: "Server is running",
    }));

    UserRoutes.routes(app);

    app.all("*", (req: Request, res: Response) => res.boom.notFound());
}
