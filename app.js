const currency = {
    USD: 1,
    AED: 3.67,
    AFN: 70.26,
    RIYAL: 3.75,
    EGP: 48.45,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 279.26,
    AUD: 1.48,
    CNY: 7.08,
    COP: 4150.35,
    HKD: 7.79,
    IDR: 15370.00,
    IRR: 42105.00,
    YEN: 142.84,
    KWD: 0.31,
    MXN: 19.80,
};

document.getElementById('convertor-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;
    let amount = parseFloat(document.getElementById('amount').value);

    let fromRate = currency[fromCurrency];
    let toRate = currency[toCurrency];

    let convertedAmount = (amount / fromRate) * toRate;

    document.getElementById('result').textContent = `Converted Amount: ${convertedAmount.toFixed(2)}`;
});
