var locationResponse = context.getVariable("locationResponse.content");
print(locationResponse);

if (context.proxyResponse.content) {
    var resp = JSON.parse(context.proxyResponse.content);
    
    // First set empty location
    if (resp.orders) {
        for(p=0; p<resp.orders.length; p++) {
            resp.orders[p]["Latitude"] = "0.000";
            resp.orders[p]["Longitude"] = "0.000";
        }
    }
    else if (resp.SalesOrder) {
        resp["Latitude"] = "0.000";
        resp["Longitude"] = "0.000";
    }
    
    var locations = JSON.parse(locationResponse);
    if (locations) {
        
        for(i=0; i<locations.length; i++) {
            var loc = locations[i];
            
            print("Checking location " + loc.SalesOrder)
            if (resp.orders) {
                for(p=0; p<resp.orders.length; p++) {
        
                    if (resp.orders[p].SalesOrder == loc.SalesOrder) {
                        resp.orders[p]["Latitude"] = loc.Latitude;
                        resp.orders[p]["Longitude"] = loc.Longitude;
                    }
                }
            }
            else if (resp.SalesOrder == loc.SalesOrder) {
                resp["Latitude"] = loc.Latitude;
                resp["Longitude"] = loc.Longitude;
            }
        }
        
        context.proxyResponse.content = JSON.stringify(resp);
    }    
    
    
}

