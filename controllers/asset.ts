import { Next, Request, Response, Server } from "restify";
import { Logger } from '../filters/log';
import { RouteModel } from '../model/route';
import { BaseController } from './base';
import { AssetRepository } from '../repositories/asset';

export class AssetController extends BaseController {

    public name: string = 'AssetController';

    protected routeConfig: object = {
        'get': [
            {
                "route": '/index?assetId=:assetId'
                    + '&name=:name&code=:code'
                    + '&categoryId=:categoryId'
                    + '&desc=:desc'
                    + '&usedDate=:usedDate',
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
        Logger.debug(`request ${this.name} get function`);
        let repository : AssetRepository= new AssetRepository();
        repository.query()
        .then((res)=>{
            res.send(JSON.stringify(res));
        });
        return next();
    };

    public post(req: Request, res: Response, next: Next): any {
        Logger.debug(`request ${this.name} post function`);
        return next();
    };
}
