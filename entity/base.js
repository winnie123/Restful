"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEntity {
    insert(model) {
        if (!this.instance) {
            throw new Error('');
        }
        return this.instance.create(model)
            .then((res) => {
            return res === undefined;
        });
    }
    update(model, condition) {
        if (!this.instance) {
            throw new Error('');
        }
        return this.select(condition)
            .then((res) => {
            if (!res) {
                return Promise.reject(new Error(''));
            }
            return res[0].update(model);
        })
            .then((res) => {
            return res === undefined;
        });
    }
    select(condition) {
        if (!this.instance) {
            throw new Error('');
        }
        return this.instance.findAll({ where: condition });
    }
    delete(condition) {
        if (!this.instance) {
            throw new Error('');
        }
        return this.instance.destroy(condition);
    }
}
exports.BaseEntity = BaseEntity;
