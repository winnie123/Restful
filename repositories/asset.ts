import { AssetModel } from "../model/asset";
// import { AssetEntity } from "../entity/asset";
// import * as DBHelper from "../db/dbhelper";
import * as Util from "../common/util";
import { BaseRepository } from "./base";
import { AssetCondition } from "../condition/asset";
import * as path from "path";

export class AssetRepository extends BaseRepository {
  constructor() {
    let dirPath: string = path.join(__dirname, "../data");
    let fileName: string = "data.json";
    super(dirPath, fileName);
  }

  public getAssets(condition?: AssetCondition): Promise<AssetModel[]> {
    return this.query(undefined)
      .then(res => {
        let startDate =
          (condition.asset.usedDate && condition.asset.usedDate[0]) || undefined;
        let endDate =
          (condition.asset.usedDate && condition.asset.usedDate[1]) || undefined;
        return res.filter(item => {
          let flag = true;
          flag =
            (flag && !condition.asset.assetId) ||
            (condition.asset.assetId && item.assetId.indexOf(condition.asset.assetId) >= 0);
          flag =
            (flag && !condition.asset.name) ||
            (condition.asset.name && item.name.indexOf(condition.asset.name) >= 0);
          flag =
            (flag && !condition.asset.category.categoryName) ||
            (condition.asset.category.categoryName &&
              item.categoryName === condition.asset.category.categoryName);
          flag =
            (flag && !condition.asset.usedDate) ||
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
          return (
            i >= condition.startNum && i < condition.startNum + condition.size
          );
        });
      });
  }

  public getAssetDetail(condition: AssetCondition): Promise<AssetModel> {
    return this.queryInFile().then(res => {
      return res.filter((item: AssetModel) => {
        return item.assetId === condition.asset.assetId;
      })[0];
    });
  }

  public createAsset(condition:AssetCondition):Promise<boolean>{

  }

  //   public query(param: AssetModel): Promise<AssetModel[]> {
  //     let instance = DBHelper.getInstance();
  //     let entity: AssetEntity = new AssetEntity(instance);
  //     let condition = Util.initCondition(param);
  //     return entity.select(condition);
  //   }

  //   public update(param: AssetModel): Promise<boolean> {
  //     let instance = DBHelper.getInstance();
  //     let entity: AssetEntity = new AssetEntity(instance);
  //     let condition = Util.initCondition(param);
  //     let model; // TODO
  //     return entity.update(model, condition);
  //   }

  //   public insert(param: AssetModel): Promise<object> {
  //     let instance = DBHelper.getInstance();
  //     let entity: AssetEntity = new AssetEntity(instance);
  //     let model: object;
  //     return entity.insert(model);
  //   }

  //   public delete(param: AssetModel): Promise<boolean> {
  //     let instance = DBHelper.getInstance();
  //     let entity: AssetEntity = new AssetEntity(instance);
  //     let condition = Util.initCondition(param);
  //     return entity.delete(condition);
  //   }
}
