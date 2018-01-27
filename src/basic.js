const {
    isValidPosition,
    setPosition,
    getPosition,
    updatePositionAction,
} = require('./position.js');
const State = require('./state.js');

const initialState = new State(1);

function update(state, change) {
    if (change) {
        state.version += 1;
        return state;
    }
    return state;
}

function get(state, enchanser) {
    return enchanser(state.id);
}

function print(state) {
    return {
        position: getPosition(state.id),
    };
}

// state reducer
function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case updatePositionAction: {
            return update(state, setPosition(state.id, action.payload));
        }
        default: return state;
    }
}

module.exports = {
    reducer,
    print,
};
