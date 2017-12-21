"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("../config");
const Constant = require("../common/constant");
// import * as DBHelper from "../db/dbhelper";
const FileHelper = require("../file/filehelper");
class BaseRepository {
    constructor(dirPath, fileName) {
        if (Config.readDataMod === Constant.ReadFileMod.ReadDB) {
            //   this.instance = DBHelper.getInstance();
        }
        else {
            this.fileName = fileName;
            this.dirPath = dirPath;
        }
    }
    query(param) {
        return this.instance ? this.queryInDB(param) : this.queryInFile();
    }
    update(param) {
        throw new Error("Method not implemented.");
    }
    insert(param) {
        throw new Error("Method not implemented.");
    }
    delete(param) {
        throw new Error("Method not implemented.");
    }
    queryInDB(param) {
        return new Promise((resolve, reject) => {
            resolve([]);
        });
    }
    queryInFile() {
        return new Promise((resolve, reject) => {
            try {
                let result = FileHelper.readFile(this.dirPath, this.fileName);
                let assets = result ? JSON.parse(result) : [];
                resolve(assets);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
}
exports.BaseRepository = BaseRepository;
