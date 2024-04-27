var res = JSON.parse(context.proxyResponse.content);
var rawWeather = context.getVariable("weatherResponse.content");
print(rawWeather);

var weather = JSON.parse(rawWeather);

if (weather && weather["weather"].length > 0)
    res["weather"] = weather["weather"][0];

if (weather && weather["main"] !== undefined) {
    var newTemp = parseFloat(weather["main"]["temp"]);
    var newTemp = parseFloat(weather["main"]["temp"]) - 273.15;
    res["weather"]["temp"] = newTemp.toFixed(2);
    res["weather"]["temp_units"] = "C";
}

if (weather)
    context.proxyResponse.content = JSON.stringify(res);