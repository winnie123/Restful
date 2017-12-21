"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const Sequelize = require('sequelize');
class AssetEntity extends base_1.BaseEntity {
    constructor(sequelize) {
        super();
        this.sequelize = sequelize;
    }
    getInstance() {
        if (!this.instance) {
            this.instance = this.sequelize.define('asset', {
                assetId: { type: Sequelize.STRING },
                name: { type: Sequelize.STRING },
                code: { type: Sequelize.STRING },
                categoryId: { type: Sequelize.STRING },
                img: { type: Sequelize.STRING },
                desc: { type: Sequelize.STRING },
                usedDate: { type: Sequelize.DATE },
                exParm: { type: Sequelize.STRING }
            });
        }
        return this.instance;
    }
}
exports.AssetEntity = AssetEntity;
