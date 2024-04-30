if (context.proxyResponse.content && context.proxyResponse.content != "") {
    var body = JSON.parse(context.proxyResponse.content);
    var resource = context.getVariable("record.resource");
    
    if (body.d) {
        var newBody = {};
        
        if (body.d.results && !newBody[resource])
            newBody[resource] = [];
                
        if (body.d.results) {
            for (i=0; i<body.d.results.length; i++) {
                var record = body.d.results[i];
                
                newBody[resource].push(convertObject(record));
            }
        }
        else {
            newBody = convertObject(body.d);
        }
        
        context.proxyResponse.content = JSON.stringify(newBody);
    }
}

function convertObject(inputObj) {
    var result = {};
    
    for (var prop in inputObj) {

        var myVar = inputObj[prop];

        if ((typeof myVar === 'string' || myVar instanceof String) && myVar !== "")
            result[prop] = inputObj[prop];        
    }
    
    return result;
}