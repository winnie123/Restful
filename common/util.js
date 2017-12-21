"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initCondition(model) {
    let condition = {};
    if (!model) {
        for (const field in model) {
            if (model.hasOwnProperty(field) && model[field] !== undefined) {
                condition[field] = model[field];
            }
        }
    }
    return condition;
}
exports.initCondition = initCondition;
function isDate(params) {
    return !isNaN(Date.parse(params));
}
exports.isDate = isDate;
function getGuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return (s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4());
}
exports.getGuid = getGuid;
