import { InstanceSaveOptions } from "sequelize";
import {BaseEntity} from './base';

const Sequelize = require('sequelize');
export class AssetEntity extends BaseEntity  {
    public sequelize;
    constructor(sequelize) {
        super();
        this.sequelize = sequelize
    }

    public getInstance() {
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