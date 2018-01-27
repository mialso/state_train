const { State, reducer, print } = require('./basic.js');
const { updatePosition } = require('./position.js');


function info(value) {
    console.log(JSON.stringify(value));
}

const state1 = new State(1);
const state2 = new State(2);

const newPosition = 'new position';
console.info('reduce update action:');
let state = reducer(state1, updatePosition('new position'));
info(state);

console.info('position storage:');
info(print(state));

const nextPosition = 'next position';
console.info('reduce update action: ');
state = reducer(state1, updatePosition(nextPosition));
info(state);

console.info('position storage:');
info(print(state));
