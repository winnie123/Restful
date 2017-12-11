import { Next, Request, Response, Server } from "restify";
import { RouteModel } from '../model/route';
import { Logger } from '../filters/log';

export class BaseController {
    public name : string = 'BaseController';
    protected routeConfig : object = {};

    public init(server : Server):void{
        Logger.debug(`注入${this.name}`);
        for (const route in this.routeConfig) {
            if (this.routeConfig.hasOwnProperty(route)) {
                this.routeConfig[route].forEach((item: RouteModel) => {
                    Logger.debug(`注入路由规则${route} ${item.route}`);
                    server[route](item.route, item.fun);
                });
            }
        }
    }
}