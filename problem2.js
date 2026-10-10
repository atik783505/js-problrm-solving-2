const createCurrencyConverter = (rate) => {
    return (amountInBDT) => {
        const convertedCurrency = amountInBDT * rate
        return convertedCurrency
    }
}

const bdt5000toUsd = createCurrencyConverter(0.0085)
const bdtToInr = createCurrencyConverter(0.63)

console.log(bdt5000toUsd(5000))

console.log(bdtToInr(3000))