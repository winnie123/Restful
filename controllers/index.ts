import { Next, Request, Response, Server } from "restify";
import { Logger } from '../filters/log';
import { RouteModel } from '../model/route';
import {BaseController} from './base';

export class IndexController extends BaseController {

    public name : string = 'IndexController';

    protected routeConfig: object = {
        'get': [
            {
                "route": '/index?vaule=:value',
                "fun": this.get
            }
        ],
        'post': [
            {
                "route": '/index',
                "fun": this.post
            }
        ]
    };

    public get(req: Request, res: Response, next: Next): any {
        Logger.debug('request indexController get function');
        res.send(req.query);
        return next();
    };

    public post(req: Request, res: Response, next: Next): any {
        Logger.debug('request indexController post function');
        return next();
    };
}
