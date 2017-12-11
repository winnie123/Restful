const Sequelize = require('sequelize');
import * as SequelizeModel from './model';

let sequelize;
let getInstance = () => {
    if (!sequelize) {
        sequelize = new Sequelize('database', 'username', 'password', {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        });

        // Or you can simply use a connection uri
        // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
    }
    return sequelize;
};

let initDB = () => {
    let models = initModels();
    return syncTables(models);
}

let initModels = () => {
    let models = [];
    if (!sequelize) {
        // TODO
        throw new Error('');
    }
    models.push(SequelizeModel.getAssetModel(sequelize));
    models.push(SequelizeModel.getCategoryModel(sequelize));
    models.push(SequelizeModel.getLocationModel(sequelize));
    models.push(SequelizeModel.getPersonModel(sequelize));
    models.push(SequelizeModel.getPositionModel(sequelize));
    models.push(SequelizeModel.getRefAssetLocationModel(sequelize));
    models.push(SequelizeModel.getRefAssetPersonModel(sequelize));
    models.push(SequelizeModel.getRefAssetPositionModel(sequelize));
    return models;
}

let syncTables = (models) => {
    let promiseList = [];
    promiseList = models.map((item) => {
        return new Promise((resolve, reject) => {
            return item.sync({ force: false });
        })
    });
    let result = true;
    return Promise.all(promiseList)
        .then((values) => {
            values.forEach((item) => {
                result = result && item || false;
            })
            return result;
        });
}

export {
    getInstance,
    initDB
}