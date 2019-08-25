/*
 * state holds both data and reducer code to run
 */

/*
 * TODO: improve data to be immutable Records
 */
const { MIGRATE } = require('./actions.js');

const getRunnerProto = initialData => Object.freeze({
    get initialData() {
        return initialData;
    },
    run(data, action) {
        switch (action.type) {
            case MIGRATE: {
                const { newRunner } = action.payload;
                return this.upgrade(newRunner, data)
            }
            default: return { data: this.reducer(data, action), reducer: this };
        }

    },
    upgrade(newReducer, data) {
        const passDataAsIs = () => data;
        const migrateData = newReducer.migrateData || passDataAsIs;
        const newData = migrateData(data);
        return {
            reducer: createReducer(newReducer, newData),
            data: newData,
        };
    },
});

function createReducer(runner, initialData)  {
    return Object.assign(
        Object.create(getRunnerProto(initialData)),
        runner,
    );
}

module.exports = {
    createReducer,
};
