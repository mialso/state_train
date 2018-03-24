// use case
const piece = require('./module.js');
const { createStore, getPart } = require('./store.js');

const initialState = {
    piece: piece.initialState,
};

const reducer = state => action => {
    return {
        piece: piece.reducer(piece.getStateHead(getPart(state, 'piece')), action),
    };
}
const stateShape = {
    initialState,
    reducer,
    subscriptions: [ handler ],
};

const store = {
    dispatch: createStore(stateShape),
}

store.dispatch(piece.actions.changeName('new name'));
store.dispatch(piece.actions.changeSpeed(10));
store.dispatch(piece.actions.moveForward());

function handler(block) {
    console.log('block: %s', JSON.stringify(block));
}
