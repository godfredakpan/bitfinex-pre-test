
function generateUrl(object) {
    const url = new URL('http://testurl.bitfinx.com/');
    for (const [key, value] of Object.entries(object)) {
        if (value) {
            url.searchParams.append(key, value);
        }
    }
    return url.toString();
}

const params = { width: 360, height: 300, locale: "en", toolbar_bg: "", interval: "3h", pair: "BTC_USD" };


console.log(generateUrl(params));