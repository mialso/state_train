const { INC, incrementByOne, incrementByTwo, incrementWithId } = require('./reducers.js');
const { increment, migrate } = require('./actions.js');
const { createReducer } = require('./core.js');

const DATA = [ 0 ];
const r1 = createReducer(incrementByOne, DATA);

console.info(`InitialData: ${JSON.stringify(r1.initialData)}`);

const actions = Array(4).fill(null).map(increment);

const { data: d1 } = actions.reduce(({ data }, action) => {
    const { data: newData } = r1.run(data, action);
    console.info(`new data [1]: ${JSON.stringify(newData)}`);
    return { data: newData };
}, {data: DATA});



const { reducer: r2, data: d2 } = r1.run(d1, migrate(incrementByTwo));

const { data: d3 } = actions.reduce(({ data }, action) => {
    const { data: newData } = r2.run(data, action);
    console.info(`new data [2]: ${JSON.stringify(newData)}`);
    return { data: newData };
}, { data: d2 });

const { reducer: r3, data: d4 } = r2.run(d3, migrate(incrementWithId));

const { data: d5 } = actions.reduce(({ data }, action) => {
    const { data: newData } = r3.run(data, action);
    console.info(`new data [M]: ${JSON.stringify(newData)}`);
    return { data: newData };
}, {data: d4});
