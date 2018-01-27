const storageArray = [];

const updatePositionAction = 'UPDATE_POSITION';

function isValidPosition(value) {
    //return Number.isInteger(value);
    return true;
}

function setPosition(ownerId, newPosition) {
    console.log(`setPosition: ${ownerId}/${newPosition}`);
    storageArray[ownerId] = newPosition;
    return isValidPosition(storageArray[ownerId]);
}

function getPosition(ownerId) {
    return storageArray[ownerId];
}

function updatePosition(newValue) {
    return {
        type: updatePositionAction,
        payload: newValue,
    };
}

/*
function withStorage(storage) {
    return {
        isValidPosition,
        setPosition,
        calculatePosition,
    };
}
module.exports = withStorage(storageArray);
*/

module.exports = {
    isValidPosition,
    setPosition,
    getPosition,
    updatePosition,
    updatePositionAction,
};

