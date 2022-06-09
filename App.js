console.log('Start Learning');

let learn = 'Finish Learning';

setTimeout(function () {
    console.log(learn)
}, 1000);

console.log('Break Time');

console.log('Office Time');

function backHome() {
    setTimeout(function () {
        console.log("Sleeping Time");
    }, 3000)
}

function workTime() {
    console.log("Working Start");
    backHome()
}

workTime();

console.log('Working Stop');

function tokenAPI(msg, alertTokenAPI) {
    alertTokenAPI(msg)
}

function alertTokenAPI(msg) {
    console.log(msg);
}

tokenAPI("Hi! Crypto", alertTokenAPI);

function printToken(msg, alertToken) {
    if (msg === 'Bitcoin') {
        btc(alertToken)
    }
    else if (msg === 'Ethereum') {
        eth(alertToken)
    }
    else if (msg === 'Binance') {
        bnb(alertToken)
    }
    else {
        alert('No Data Here!')
    }
}

function btc(alertToken) {
    alertToken("Hello Bitcoin")
    alert("Buy & Sell Bitcoin");
}

function eth(alertToken) {
    alertToken("Hello Ethereum")
    alert("Buy & Sell Ethereum");
}

function bnb(alertToken) {
    alertToken("Hello Binance Coin")
    alert("Buy & Sell Binance Coin");
}

function alertToken(msg) {
    alert(msg);
}

printToken(prompt("Enter Crypto","BTC , ETH Or BNB"), alertToken);

let promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve()
    }, 1000)
    console.log("Promise Is Running!")
})

promise.then(function () {
    console.log("Promise Is Resolve")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Completed');
    }, 2000);
})

.finally(() => console.log('Done'))
.then(result => console.log(result));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000)
.then(() => console.log('Running After 2 seconds'));

async function getData() {
    let promise04 = new Promise(function (resolve, reject) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                resolve(result)
            })
            .catch(function (error) {
                reject(error)
            })
        }
    )

    let data = await promise04
    console.log(data)
};

getData();