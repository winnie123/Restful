"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../filters/log");
const base_1 = require("./base");
class AssetController extends base_1.BaseController {
    constructor() {
        super(...arguments);
        this.name = 'AssetController';
        this.routeConfig = {
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
    }
    get(req, res, next) {
        log_1.Logger.debug(`request ${this.name} get function`);
        res.send(req.params);
        return next();
    }
    ;
    post(req, res, next) {
        log_1.Logger.debug(`request ${this.name} post function`);
        return next();
    }
    ;
}
exports.AssetController = AssetController;
