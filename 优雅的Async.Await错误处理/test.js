const errorCaptured = require('./index');

(async () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const number = Math.random().toFixed(2) * 100;
                if (number > 50) {
                    resolve(`number ${number} is more than 50`);
                } else {
                    reject(`number ${number} is no greater than 50`);
                }
            })
        })
    };
    const [err, data] = await errorCaptured(fetchData);
    console.log('err', err);
    console.log('data', data);
})();