"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let path = require('path');
let log4js = require('log4js');
class Logger {
    static debug(messages) {
        Logger.init("default");
        Logger.logger.debug(messages);
    }
    static trace(messages) {
        Logger.init("trace");
        Logger.logger.trace(messages);
    }
    static info(messages) {
        Logger.init("info");
        Logger.logger.info(messages);
    }
    static error(messages) {
        Logger.init("error");
        Logger.logger.error(messages);
    }
    static logHandler(req, res, next) {
        Logger.init('default');
        Logger.debug(`request ${req.url}`);
        next();
    }
    static init(category) {
        if (!Logger.logger) {
            log4js.configure(path.join(__dirname, '../logconfig.json'));
        }
        Logger.logger = log4js.getLogger(category);
    }
}
exports.Logger = Logger;
