async function errorCaptured(asyncFunc) {
    try {
        const data = await asyncFunc();
        return [null, data];
    } catch (e) {
        return [e, null];
    }
};

async function errorPromiseCaptured(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err, null]);
};

exports.errorCaptured = errorCaptured;
exports.errorPromiseCaptured = errorPromiseCaptured;