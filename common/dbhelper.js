const Sequelize = require('sequelize');
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
    }
    return sequelize;
};

let initDB = () => {
    let models = initModels();
    return syncTables(models);
}

let initModels = () => {
    let models = [];
    models.push(initAssetModel());
    models.push(initCategoryModel());
    return models;
}

let initAssetModel = () => {
    return sequelize.define('asset', {
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

let initCategoryModel = () => {
    return sequelize.define('category', {
        categoryId: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING },
        num: { type: Sequelize.NUMBER }
    });
}

let initPositionModel = () => {

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

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

export {
    getInstance,
    initDB
}