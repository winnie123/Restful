import { IncomingMessage, ServerResponse } from "http";

let path = require('path');
let log4js = require('log4js');


export class Logger {
    public static logger;

    public static debug(messages: string) {
        Logger.init("default");
        Logger.logger.debug(messages);
    }

    public static trace(messages : string){
        Logger.init("trace");
        Logger.logger.trace(messages);
    }

    public static info(messages: string) {
        Logger.init("info");
        Logger.logger.info(messages);
    }

    public static error(messages: string) {
        Logger.init("error");
        Logger.logger.error(messages);
    }

    public static logHandler(req: IncomingMessage, res: ServerResponse, next: () => void) {
        Logger.init('default');
        Logger.debug(`request ${req.url}`)
        next();
    }

    public static init(category : string) {
        if (!Logger.logger) {
            log4js.configure(path.join(__dirname, '../logconfig.json'));
        }
        Logger.logger = log4js.getLogger(category);
    }
}
