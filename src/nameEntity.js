/*
 * each entity has actions, reducers and result data
 */

/*
 * entity public interface is represented by action creators
 */
const CHANGE_NAME = 'CHANGE_NAME';

const actions = {
    changeName: newName => ({ type: CHANGE_NAME, payload: { newName } }),
}

/*
 * entity reducer is called when action comes
 */
const initialState = { name: 'no name' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return { name: action.payload.newName };
        }
        default: return state;
    }
}

module.exports = {
    actions,
    reducer,
    initialState,
    getStateHead,
};

function getStateHead(blocks) {
    return {
        name: blocks.reduce((acc, block) => acc || block.name, ''),
    };
}
