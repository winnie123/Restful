"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../filters/log");
class BaseController {
    constructor() {
        this.name = 'BaseController';
        this.routeConfig = {};
    }
    init(server) {
        log_1.Logger.debug(`注入${this.name}`);
        for (const route in this.routeConfig) {
            if (this.routeConfig.hasOwnProperty(route)) {
                this.routeConfig[route].forEach((item) => {
                    log_1.Logger.debug(`注入路由规则${route} ${item.route}`);
                    server[route](item.route, item.fun);
                });
            }
        }
    }
}
exports.BaseController = BaseController;
