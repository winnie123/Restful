"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let restify = require('restify');
const ExceptionFilter = require("./exception");
const NotFoundFilter = require("./notfound");
const log_1 = require("./log");
const index_1 = require("../controllers/index");
class Routers {
    static inject(server) {
        this.beforeInjectControllers(server); // 注入filter
        this.injectControllers(server); // 注入controller
        // this.afterInjectControllers(app);// 注入filter
    }
    ;
    static beforeInjectControllers(server) {
        server.use(log_1.Logger.logHandler); // 默认记录每个请求日志
        server.use(restify.plugins.acceptParser(server.acceptable));
        server.use(restify.plugins.queryParser());
        server.use(restify.plugins.bodyParser());
        // app.use(express.static(path.join(__dirname, 'public')));
        // app.use(AuthFilter.authHandler);
    }
    static injectControllers(server) {
        // 
        let index = new index_1.IndexController();
        index.init(server);
    }
    static afterInjectControllers(server) {
        server.use(NotFoundFilter.notFoundHandler);
        server.use(ExceptionFilter.exceptionHandler);
    }
}
exports.Routers = Routers;
