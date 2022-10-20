
const volumeSetup = () => {
    const volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    const element = getElement(volumeUnit);
    if (element) {
        element.prop("checked", true);
    }
    // override currencies list
    const result = window.APP.util.initCurrenciesList()
    return result
}

const getElement = (volumeUnit) => {
    switch (volumeUnit) {
        case 'FIRSTCCY': {
            return $('#tickervolccy_0')
        }
        case 'USD': {
            return $('#tickervolccy_USD')
        }
        case 'BTC': {
            return $('#tickervolccy_BTC')
        }
        case 'ETH': {
            return $('#tickervolccy_ETH')
        }
        default: {
            return null
        }
    }
}

// I refactored the code to switch statement because a switch statement is significantly faster 
// than an if-else ladder if there are many nested if-else's involved. 
// As a result, instead of checking which case is satisfied throughout execution, 
// it just decides which case must be completed.