const { INC } = require('./actions.js');

const incrementByOne = {
    reducer(data = this.initialData, action) {
        switch (action.type) {
            case INC: {
                return data.concat(data[data.length - 1] + 1);
            }
            default: return data;
        }
    },
};

const incrementByTwo = {
    reducer(data = this.initialData, action) {
        switch (action.type) {
            case INC: {
                return data.concat(data[data.length - 1] + 2);
            }
            default: return data;
        }
    },
};

const incrementWithId = {
    reducer(data = this.initialData, action) {
        switch (action.type) {
            case INC: {
                const { items, ids } = data;
                const newValue = items[items.length - 1] + 4;
                return { 
                    items: items.concat(newValue),
                    ids: ids.concat(`id_${newValue}`),
                };
            }
            default: return data;
        }
    },
    migrateData(data) {
        debugger;
        return {
            items: data,
            ids: Array(data.length),
        };
    },
};

module.exports = {
    INC,
    incrementByOne,
    incrementByTwo,
    incrementWithId,
};
