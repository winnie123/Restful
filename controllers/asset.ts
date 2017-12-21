import { Next, Request, Response, Server } from "restify";
import { Logger } from "../filters/log";
import { RouteModel } from "../model/route";
import { BaseController } from "./base";
import { AssetRepository } from "../repositories/asset";
import * as query from "query-string";
import { AssetCondition } from "../condition/asset";

export class AssetController extends BaseController {
  public name: string = "AssetController";

  protected routeConfig: object = {
    get: [
      {
        route:
          "/asset?assetId=:assetId" +
          "&name=:name" +
          "&categoryId=:categoryId" +
          "&desc=:desc" +
          "&usedDate=:usedDate" +
          "&startNum=:startNum" +
          "&size=:size",
        fun: this.get
      }
    ],
    post: [
      {
        route: "/asset",
        fun: this.post
      }
    ]
  };

  public get(req: Request, res: Response, next: Next): any {
    Logger.debug(`request ${this.name} get function`);
    // TODO:封装queryString parse
    let queryString: string = req.getQuery();
    let condition: AssetCondition = query.parse(queryString);
    let repository: AssetRepository = new AssetRepository();
    return repository
      .getAssets(condition)
      .then(result => {
        res.send(JSON.stringify(result));
      })
      .then(res => {
        next();
      })
      .catch(err => {
        // TODO:
      });
  }

  public post(req: Request, res: Response, next: Next): any {
    Logger.debug(`request ${this.name} post function`);
    return next();
  }
}
