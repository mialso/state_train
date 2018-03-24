/*
 * each entity has actions, reducers and result data
 */

/*
 * entity public interface is represented by action creators
 */
const MOVE_BACKWARD = 'MOVE_BACKWARD';
const MOVE_FORWARD = 'MOVE_FORWARD';
const CHANGE_SPEED = 'CHANGE_SPEED';

const actions = {
    moveBackward: () => ({ type: MOVE_BACKWARD }),
    moveForward: () => ({ type: MOVE_FORWARD }),
    changeSpeed: speed => ({ type: CHANGE_SPEED, payload: { speed } }),
}

/*
 * entity reducer is called when action comes
 */
const initialState = { position: 0, speed: 5 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_FORWARD: {
            return { position: state.position + state.speed };
        }
        case MOVE_BACKWARD: {
            return { position: state.position - state.speed };
        }
        case CHANGE_SPEED: {
            return { speed: action.payload.speed };
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
    console.log('blocks: %s', JSON.stringify(blocks));
    return {
        position: blocks.reduce((acc, block) => acc || block.position, 0),
        speed: blocks.reduce((acc, block) => acc || block.speed, 0),
    };
}
