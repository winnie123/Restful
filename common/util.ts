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

function isDate(params) {
  return !isNaN(Date.parse(params));
}

function getGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
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
    s4()
  );
}

export { initCondition ,isDate,getGuid};
