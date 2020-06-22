let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.4573;
let rateGBP = 4.9328;
let rateUSD = 3.9741;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    };

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});
