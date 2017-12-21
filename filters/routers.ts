let restify = require("restify");
import * as AuthFilter from "./auth";
import * as ExceptionFilter from "./exception";
import * as NotFoundFilter from "./notfound";
import { Logger } from "./log";
import { Server } from "restify";
import { IndexController } from "../controllers/index";
import { AssetController } from "../controllers/asset";

export class Routers {
  public static inject(server: Server) {
    this.beforeInjectControllers(server); // 注入filter
    this.injectControllers(server); // 注入controller
    // this.afterInjectControllers(app);// 注入filter
  }

  private static beforeInjectControllers(server: Server) {
    server.use(Logger.logHandler); // 默认记录每个请求日志
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.queryParser());
    server.use(restify.plugins.bodyParser());
    // app.use(AuthFilter.authHandler);
  }

  private static injectControllers(server: Server) {
    //
    let index: IndexController = new IndexController();
    let asset: AssetController = new AssetController();
    index.init(server);
    asset.init(server);
  }

  private static afterInjectControllers(server: Server) {
    server.use(NotFoundFilter.notFoundHandler);
    server.use(ExceptionFilter.exceptionHandler);
  }
}
