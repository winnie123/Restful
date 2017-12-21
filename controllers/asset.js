"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../filters/log");
const base_1 = require("./base");
const asset_1 = require("../repositories/asset");
const query = require("query-string");
class AssetController extends base_1.BaseController {
    constructor() {
        super(...arguments);
        this.name = "AssetController";
        this.routeConfig = {
            get: [
                {
                    route: "/asset?assetId=:assetId" +
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
    }
    get(req, res, next) {
        log_1.Logger.debug(`request ${this.name} get function`);
        // TODO:封装queryString parse
        let queryString = req.getQuery();
        let condition = query.parse(queryString);
        let repository = new asset_1.AssetRepository();
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
    post(req, res, next) {
        log_1.Logger.debug(`request ${this.name} post function`);
        return next();
    }
}
exports.AssetController = AssetController;
