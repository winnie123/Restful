"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { AssetEntity } from "../entity/asset";
// import * as DBHelper from "../db/dbhelper";
const Util = require("../common/util");
const base_1 = require("./base");
const path = require("path");
class AssetRepository extends base_1.BaseRepository {
    constructor() {
        let dirPath = path.join(__dirname, "../data");
        let fileName = "data.json";
        super(dirPath, fileName);
    }
    getAssets(condition) {
        return this.query(undefined)
            .then(res => {
            let startDate = (condition.usedDate && condition.usedDate[0]) || undefined;
            let endDate = (condition.usedDate && condition.usedDate[1]) || undefined;
            return res.filter(item => {
                let flag = true;
                flag =
                    (flag && !condition.assetId) ||
                        (condition.assetId && item.assetId.indexOf(condition.assetId) >= 0);
                flag =
                    (flag && !condition.name) ||
                        (condition.name && item.name.indexOf(condition.name) >= 0);
                flag =
                    (flag && !condition.categoryName) ||
                        (condition.categoryName &&
                            item.categoryName === condition.categoryName);
                flag =
                    (flag && !condition.usedDate) ||
                        (Util.isDate(item.usedDate) &&
                            new Date(item.usedDate.replace(/-/g, "/")) <= new Date(endDate) &&
                            new Date(item.usedDate.replace(/-/g, "/")) >=
                                new Date(startDate));
                return flag;
            });
        })
            .then(res => {
            condition.startNum = condition.startNum || 0;
            condition.size = condition.size || 10;
            return res.filter((item, i) => {
                return (i >= condition.startNum && i < condition.startNum + condition.size);
            });
        });
    }
    getAssetDetail(condition) {
        return this.queryInFile().then(res => {
            return res.filter((item) => {
                return item.assetId === condition.assetId;
            })[0];
        });
    }
}
exports.AssetRepository = AssetRepository;
