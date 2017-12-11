"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../filters/log");
const base_1 = require("./base");
class IndexController extends base_1.BaseController {
    constructor() {
        super(...arguments);
        this.name = 'IndexController';
        this.routeConfig = {
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
    }
    get(req, res, next) {
        log_1.Logger.debug('request indexController get function');
        res.send(req.query);
        return next();
    }
    ;
    post(req, res, next) {
        log_1.Logger.debug('request indexController post function');
        return next();
    }
    ;
}
exports.IndexController = IndexController;
