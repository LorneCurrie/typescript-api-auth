import { Express } from "express";
import { UserController } from "../controllers";

export function routes(app: Express) {
    app.get("/api/users", UserController.UserGet.getAll);
    app.post("/api/users", UserController.UserPost.create);
}
