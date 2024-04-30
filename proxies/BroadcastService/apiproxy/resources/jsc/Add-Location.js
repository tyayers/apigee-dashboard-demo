var locationResponse = context.getVariable("locationResponse.content");
print(locationResponse);

var locations = JSON.parse(locationResponse);
if (locations) {
    var resp = JSON.parse(context.proxyResponse.content);
    
    for(i=0; i<locations.length; i++) {
        var loc = locations[i];
        
        print("Checking location " + loc.SalesOrder)
        var order;
        if (resp.orders) {
            for(p=0; p<resp.orders.length; p++) {
    
                if (resp.orders[p].SalesOrder == loc.SalesOrder) {
                    order = resp.orders[p];
                    break;
                }
            }
        }
        else if (resp.SalesOrder == loc.SalesOrder)
            order = resp;
            
        if (order) {
            order["Latitude"] = loc.Latitude;
            order["Longitude"] = loc.Longitude;
        }
    }
    
    context.proxyResponse.content = JSON.stringify(resp);
}


