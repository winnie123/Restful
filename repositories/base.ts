import { IRepository } from "./irepository";
import * as Config from "../config";
import * as Constant from "../common/constant";
// import * as DBHelper from "../db/dbhelper";
import * as FileHelper from "../file/filehelper";
import * as Util from "../common/util";

export class BaseRepository implements IRepository {
  protected instance;
  protected fileName: string;
  protected dirPath: string;
  constructor(dirPath, fileName) {
    if (Config.readDataMod === Constant.ReadFileMod.ReadDB) {
    //   this.instance = DBHelper.getInstance();
    } else {
      this.fileName = fileName;
      this.dirPath = dirPath;
    }
  }
  public query(param: object): Promise<any[]> {
    return this.instance ? this.queryInDB(param) : this.queryInFile();
  }
  public update(param: object): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  public insert(param: object): Promise<object> {
    throw new Error("Method not implemented.");
  }
  public delete(param: object): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  protected queryInDB(param: object): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }

  protected queryInFile(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      try {
        let result: string = FileHelper.readFile(this.dirPath, this.fileName);
        let assets: any[] = result ? JSON.parse(result) : [];
        resolve(assets);
      } catch (ex) {
        reject(ex);
      }
    });
  }
}
