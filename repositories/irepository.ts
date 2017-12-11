export interface IRepository {
    query(param: object): Promise<any[]>;
    update(param: object): Promise<boolean>;
    insert(param: object): Promise<object>;
    delete(param: object): Promise<boolean>;
}