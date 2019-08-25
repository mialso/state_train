const INC = 'INC';
const MIGRATE = 'MIGRATE';

function increment() {
    return { type: INC };
}
function migrate(newRunner) {
    return { type: MIGRATE, payload: { newRunner } };
}

module.exports = {
    INC,
    MIGRATE,
    increment,
    migrate,
};
