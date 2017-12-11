function initCondition(model: object): object {
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

export {
    initCondition
}