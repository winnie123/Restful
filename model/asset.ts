/**
 * 资产数据模型
 */
export type AssetModel = {
    assetId: string;// 标号
    name: string;// 名称
    code: string;// 条形码
    categoryId: string;// 类别
    img: string;// 图片地址
    desc: string;// 说明
    usedDate : Date;// 开始使用时间（提取时间）
    exParm : string [];// 位置拓展属性，只记录编号。位置拓展信息包括上下左右、内部、第一格第二格等方位。
}

/**
 * 资产类型数据模型
 */
export type AssetCategoryModel = {
    categoryId: string;// 类别编号
    name: string;// 类别名称
    num: number;// 库存数量
}

/**
 * 物理位置数据模型
 * 主要针对楼层、房间等物理方位
 */
export type PositionModel = {
    positionId : string;// 物理位置编号
    name : string;// 位置名称
    desc : string;// 位置说明
}

/**
 * 人员数据模型
 */
export type PersonModel = {
    personId : string;// 人员编号
    name : string;// 人员名称
}

/**
 * 位置数据模型
 */
export type LocationModel = {
    locationId : string;// 位置编号
    name : string;// 位置名称
    value : object;// 位置说明
    status : LocationEnum;/// 位置状态
}

/**
 * 资产物理位置关系数据模型
 * 与物理方位相对的位置关系（资产在某个房间、某个楼层）
 */
export type RefAssetPositionModel = {
    assetId : string;// 资产编号
    positionId : string;// 物理位置编号
}

/**
 * 资产位置关系数据模型
 * 资产与资产间的位置关系（资产在资产的左边、资产在资产内的某一个隔间）
 */
export type RefAssetLocationModel = {
    assetId : string;// 当前资产编号
    refAssetId : string;// 参照资产编号
    location : LocationModel;// 位置关系
}

/**
 * 资产人员关系数据模型
 * 资产所属人
 */
export type RefAssetPersonModel = {
    assetId : string;// 资产编号
    personId : string;// 人员编号
}

enum LocationEnum {
    used = 1,// 已使用
    disUsed = 2// 未使用
}