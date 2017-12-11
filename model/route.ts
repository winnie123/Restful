import { Next, Request, Response, Server } from "restify";
export type RouteModel = {
    route : string;
    fun : (req: Request, res: Response, next: Next)=>any;
}