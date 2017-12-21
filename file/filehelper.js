"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file = require("fs");
function readFile(dirPath, fileName) {
    if (!dirPath || !fileName) {
        // TODO:
        throw new Error('');
    }
    let path = dirPath + '/' + fileName;
    if (!file.existsSync(path)) {
        // TODO:
        throw new Error('');
    }
    try {
        return file.readFileSync(path, { encoding: 'utf-8' }); // 读取内容
    }
    catch (ex) {
        throw ex;
    }
}
exports.readFile = readFile;
function saveFile(dirPath, fileName, data) {
    let result = false;
    if (!dirPath || !fileName) {
        // TODO:
        throw new Error('');
    }
    let path = dirPath + fileName;
    try {
        file.writeFileSync(path, data);
        result = true;
    }
    catch (ex) {
        throw ex;
    }
    return result;
}
exports.saveFile = saveFile;
