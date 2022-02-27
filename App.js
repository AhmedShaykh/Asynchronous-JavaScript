console.log('Start Learning JS !');

let data = "Learning Asynchronous JavaScript + ES6 (Vanilla Javascript)";
document.write(data)

let learn = "Content";

setTimeout(function () {
    console.log(learn)
}, 1000);

console.log('End Learning JS !');

console.log('Office Time');

function backHome() {
    setTimeout(function () {
        console.log("Brain Working Stop");
    }, 3000)
}

function workTime() {
    console.log("Brain Working Start");
    backHome()
}
workTime();

console.log('Sleeping Time');

function printToken(msg, alertToken) {
    alertToken(msg)
}

function alertToken(msg) {
    alert(msg);
}

printToken("Hello Crypto", alertToken);


function printToken(msg, alertToken) {
    if (msg === 'Bitcoin') {
        btc(alertToken)
    }
    else if (msg === 'Ethereum') {
        eth(alertToken)
    }
    else {
        bnb(alertToken)
    }
}

function btc(alertToken) {
    alert("Buy & Sell Bitcoin");
    alertToken("Hello Bitcoin")
}

function eth(alertToken) {
    alert("Buy & Sell Ethereum");
    alertToken("Hello Ethereum")
}

function bnb(alertToken) {
    alert("Buy & Sell Binance Coin");
    alertToken("Hello Binance Coin")
}

function alertToken(msg) {
    alert(msg);
}

printToken("Bitcoin", alertToken);

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise Run!")
        resolve()
    }, 1000)
})
promise.then(function(){
    console.log("Promise Is Resolve")
})