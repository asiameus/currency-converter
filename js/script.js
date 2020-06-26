{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.4573;
        const rateGBP = 4.9328;
        const rateUSD = 3.9741;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;
        };
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();

}