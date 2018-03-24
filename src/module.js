/*
 * each module is a list of entities, like types in general sense
 */

/*
 * module public interface is represented by action creators, including entites
 */
const { getPart } = require('./store.js');
const entity = require('./typeEntity.js');
const name = require('./nameEntity.js');

const moduleActions = {};

const initialState = {
    entity: entity.initialState,
    name: name.initialState,
};

const reducer = (state = initialState, action) => {
    return {
        entity: entity.reducer(state.entity, action),
        name: name.reducer(state.name, action),
    };
}

function getStateHead (blocks) {
    return {
        entity: entity.getStateHead(getPart(blocks, 'entity')),
        name: name.getStateHead(getPart(blocks, 'name')),
    };
}

module.exports = {
    actions: Object.assign(moduleActions, entity.actions, name.actions),
    reducer,
    initialState,
    getStateHead,
};
