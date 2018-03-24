const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const dispatch = subscriptions => change => {
    return change && subscriptions.forEach(handler => handler(change));
}

const commit = state => shape => data => {
    const { name } = data;
    const isValidChange = shape.name.validate(name);
    isValidChange && state.push(data);
    return isValidChange ? data : null;
}

const isTruthy = item => !!item;
const isString = data => typeof data === 'string';
const isNumber = data => typeof data === 'number';
const createStore = shape => {
    const { calculate, validate, subscriptions } = shape.name;
    const state = [{ name: shape.name.initialData }];
    return pipe(
        //dispatch,
        calculate(state),
        commit(state)(shape),
        dispatch(subscriptions),
    );
}

// use case
const changeName = state => action => {
    switch (action.type) {
        case 'CHANGE_NAME': return { name: action.payload };
        default : return null;
    }
}

const stateShape = {
    name: {
        initialData: 'no name',
        calculate: changeName,
        validate: isString,
        subscriptions: [ handler ],
    },
};
const state = [];
const store = {
    dispatch: createStore(stateShape),
}

function handler(change) {
    console.log('handler: %s', JSON.stringify(change));
}

store.dispatch({ type: 'CHANGE_NAME', payload: 'new name' });
