const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const dispatch = subscriptions => change => {
    return change && subscriptions.forEach(handler => handler(change));
}

const commit = state => shape => data => {
    const { name } = data;
    state.push(data);
    return data;
    /* omit validation for now
    const isValidChange = shape.name.validate(name);
    isValidChange && state.push(data);
    return isValidChange ? data : null;
    */
}

const isTruthy = item => !!item;
const isString = data => typeof data === 'string';
const isNumber = data => typeof data === 'number';
const createStore = shape => {
    const { reducer, subscriptions } = shape;
    const state = [ shape.initialState ];
    return pipe(
        //dispatch,
        reducer(state),
        commit(state)(shape),
        dispatch(subscriptions),
    );
}

module.exports = {
    createStore,
    getLastBlock,
    getHead,
    getPart,
};

function getPart(state, part) {
    return state.map(block => block[part]);
}

function getHead(state, part) {
    return;
}
function getLastBlock(state) {
    return state.slice(-1)[0];
}
