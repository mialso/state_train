const test = require('tape');
const State = require('../src/state.js');

test(
    'State constructor: given integer id, should return new state',
    t => {
        t.plan(1);
        const id = 1;
        const newState = new State(id);
        t.equal(newState.id, id);
    }
);
