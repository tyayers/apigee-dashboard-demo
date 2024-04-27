var res = JSON.parse(context.proxyResponse.content);
var rawLocations = context.getVariable("azureResponse.content");

print(rawLocations);

var locations = JSON.parse(rawLocations);

if (locations) {
    for(i=0; i<locations.length; i++) {
        var loc = locations[i];
        
        
    }
}

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