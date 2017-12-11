export class BaseEntity {
    protected instance;

    public insert(model: object): Promise<object> {
        if(!this.instance){
            throw new Error('');
        }
        return this.instance.create(model)
            .then((res) => {
                return res === undefined;
            });
    }

    public update(model: object, condition: object): Promise<any> {
        if(!this.instance){
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

    public select(condition: object): Promise<any[]> {
        if(!this.instance){
            throw new Error('');
        }
        return this.instance.findAll({ where: condition });
    }

    public delete(condition): Promise<boolean> {
        if(!this.instance){
            throw new Error('');
        }
        return this.instance.destroy(condition);
    }
}