import { IRepository } from "./irepository";
import { AssetModel } from "../model/asset";
import {AssetEntity} from '../entity/asset';
import * as DBHelper from '../db/dbhelper';
import * as Util from '../common/util';

export class AssetRepository implements IRepository{
    public query(param: AssetModel): Promise<AssetModel[]> {
        let instance = DBHelper.getInstance();
        let entity : AssetEntity = new AssetEntity(instance);
        let condition = Util.initCondition(param);
        return entity.select(condition);
    }

    public update(param: AssetModel): Promise<boolean> {
        let instance = DBHelper.getInstance();
        let entity : AssetEntity = new AssetEntity(instance);
        let condition = Util.initCondition(param);
        let model;// TODO
        return entity.update(model,condition);
    }

    public insert(param: AssetModel): Promise<object> {
        let instance = DBHelper.getInstance();
        let entity : AssetEntity = new AssetEntity(instance);
        let model : object;
        return entity.insert(model);
    }

    public delete(param: AssetModel): Promise<boolean> {
        let instance = DBHelper.getInstance();
        let entity : AssetEntity = new AssetEntity(instance);
        let condition = Util.initCondition(param);
        return entity.delete(condition);
    }

}