# bitfinex-pre-test

# This repository answers the folowing questions; 


1) Describe the process, in a react/redux project, to fetch a set of data from a remote API endpoint, then to store that data into redux and then to present it on the screen.

2) Create a function `generateUrl` to generate a URL from given parameters:
{
width: 360,
height: 300,
locale: 'en',
toolbar_bg: '',
interval: '3h',
pair: 'BTC_USD',
}
You can use any lib but the generated result should be 
"http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360"
More parameters are planned to be added/removed later and the the result should neglect the empty params (ex: should not include toolbar_bg in URL when its value is empty).

3) Apply some refactoring to improve the code of the following function. Explain the reasons behind your changes and which benefit they bring into the code.

var volumeSetup = function () {
// setup volume unit interface
var volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
var element = null;
if (volumeUnit === 'FIRSTCCY') {
element = $('#tickervolccy_0');
} else if (volumeUnit === 'USD') {
element = $('#tickervolccy_USD');
} else if (volumeUnit === 'BTC') {
element = $('#tickervolccy_BTC');
} else if (volumeUnit === 'ETH') {
element = $('#tickervolccy_ETH');
}
if (element) {
element.prop("checked", true);
}
// override currencies list
var result = window.APP.util.initCurrenciesList()
return result
}