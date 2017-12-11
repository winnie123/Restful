const Sequelize = require('sequelize');
let getAssetModel = (sequelize) => {
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

let getCategoryModel = (sequelize) => {
    return sequelize.define('category', {
        categoryId: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING },
        num: { type: Sequelize.NUMBER }
    });
}

let getPositionModel = (sequelize) => {
    return sequelize.define('postion', {
        postionId: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING },
        desc: { type: Sequelize.STRING }
    });
}

let getLocationModel = (sequelize) => {
    return sequelize.define('location', {
        locationId: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING },
        value: { type: Sequelize.STRING },
        status: { type: Sequelize.NUMBER }
    });
}

let getPersonModel = (sequelize) => {
    return sequelize.define('person', {
        personId: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING }
    });
}

let getRefAssetPositionModel = (sequelize) => {
    return sequelize.define('refassetposition', {
        assetId: { type: Sequelize.STRING },
        positionId: { type: Sequelize.STRING }
    });
}

let getRefAssetLocationModel = (sequelize) => {
    return sequelize.define('refassetlocation', {
        assetId: { type: Sequelize.STRING },
        refAssetId: { type: Sequelize.STRING },
        locationId: { type: Sequelize.STRING }
    });
}

let getRefAssetPersonModel = (sequelize) => {
    return sequelize.define('refassetperson', {
        assetId: { type: Sequelize.STRING },
        personId: { type: Sequelize.STRING }
    });
}

export {
    getAssetModel,
    getCategoryModel,
    getLocationModel,
    getPersonModel,
    getPositionModel,
    getRefAssetLocationModel,
    getRefAssetPersonModel,
    getRefAssetPositionModel
}