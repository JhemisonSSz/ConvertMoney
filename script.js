const currencySelect01 = document.querySelector('.currency-select-01')
const currencySelect02 = document.querySelector('.currency-select-02')
const convertButton = document.querySelector('.convert-button')

function convertCurrency() {
    const inputCurrency = Number(document.querySelector('.input-currency').value) || 0
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')


    if (currencySelect01.value == 'real-01') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrency)
    }

    if (currencySelect01.value == 'dolar-01') {
        currencyValueToConvert.innerHTML = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrency)
    }

    if (currencySelect01.value == 'euro-01') {
        currencyValueToConvert.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrency)
    }

    if (currencySelect01.value == 'libra-01') {
        currencyValueToConvert.innerHTML = Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrency)
    }

    if (currencySelect01.value == 'bitcoin-01') {
        currencyValueToConvert.innerHTML = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrency)
    }


    const realToday = 1.00
    const dolarToday = 5.1
    const euroToday = 5.85
    const libraToday = 6.85
    const bitcoinToday = 332937.40

    let valorEmReal = inputCurrency

    if (currencySelect01.value == 'dolar-01') valorEmReal = inputCurrency * dolarToday
    if (currencySelect01.value == 'euro-01') valorEmReal = inputCurrency * euroToday
    if (currencySelect01.value == 'libra-01') valorEmReal = inputCurrency * libraToday
    if (currencySelect01.value == 'bitcoin-01') valorEmReal = inputCurrency * bitcoinToday


    if (currencySelect02.value == 'dolar-02') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorEmReal / dolarToday)
    }

    if (currencySelect02.value == 'euro-02') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorEmReal / euroToday)
    }

    if (currencySelect02.value == 'libra-02') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(valorEmReal / libraToday)
    }

    if (currencySelect02.value == 'bitcoin-02') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BTC'
        }).format(valorEmReal / bitcoinToday)
    }

    if (currencySelect02.value == 'real-02') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorEmReal / realToday)
    }
}

function changeCurrency() {
    const currencyConvertName = document.getElementById('currency-convert-name')
    const currencyConvertImage = document.querySelector('.currency-convert-img')

    if (currencySelect01.value == 'real-01') {
        currencyConvertName.innerHTML = 'Real'
        currencyConvertImage.src = './assets/real.png'
    }

    if (currencySelect01.value == 'dolar-01') {
        currencyConvertName.innerHTML = 'Dólar americano'
        currencyConvertImage.src = './assets/dolar.png'
    }

    if (currencySelect01.value == 'euro-01') {
        currencyConvertName.innerHTML = 'Euro'
        currencyConvertImage.src = './assets/euro.png'
    }

    if (currencySelect01.value == 'libra-01') {
        currencyConvertName.innerHTML = 'Libra'
        currencyConvertImage.src = './assets/libra.png'
    }

    if (currencySelect01.value == 'bitcoin-01') {
        currencyConvertName.innerHTML = 'Bitcoin'
        currencyConvertImage.src = './assets/bitcoin.png'
    }


    const inputCurrency = document.querySelector('.input-currency')

    if (currencySelect01.value === 'dolar-01') {
        inputCurrency.placeholder = 'US$ 0,00';

    } else if (currencySelect01.value === 'euro-01') {
        inputCurrency.placeholder = '€ 0,00';

    } else if (currencySelect01.value === 'libra-01') {
        inputCurrency.placeholder = '£ 0,00';

    } else if (currencySelect01.value === 'bitcoin-01') {
        inputCurrency.placeholder = 'BTC 0.00';

    } else { inputCurrency.placeholder = 'R$ 0,00'; }



    const currencyConvertedName = document.getElementById('currency-converted-name')
    const currencyConvertedImage = document.querySelector('.currency-converted-img')

    if (currencySelect02.value == 'dolar-02') {
        currencyConvertedName.innerHTML = 'Dólar americano'
        currencyConvertedImage.src = './assets/dolar.png'
    }

    if (currencySelect02.value == 'euro-02') {
        currencyConvertedName.innerHTML = 'Euro'
        currencyConvertedImage.src = './assets/euro.png'
    }

    if (currencySelect02.value == 'libra-02') {
        currencyConvertedName.innerHTML = 'Libra'
        currencyConvertedImage.src = './assets/libra.png'
    }

    if (currencySelect02.value == 'bitcoin-02') {
        currencyConvertedName.innerHTML = 'Bitcoin'
        currencyConvertedImage.src = './assets/bitcoin.png'
    }

    if (currencySelect02.value == 'real-02') {
        currencyConvertedName.innerHTML = 'Real'
        currencyConvertedImage.src = './assets/real.png'
    }


    convertCurrency()
}


currencySelect01.addEventListener('change', changeCurrency)
currencySelect02.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertCurrency)
