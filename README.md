# Apigee Dashboard Demo App
This is a simple demo app for Apigee X that shows some real-time API communication between microservices deployed in GCP, a frontend, and APIs running in Apigee.

You can deploy this into your GCP project that has Apigee X provisioned using these steps.

```sh
# First copy the 1.env.sh file to a local version
cp 1.env.sh 1.env.local.sh
# Edit the local file using nano or your editor of choice and set the environment variables
nano 1.env.local.sh

# Now call the 2.create-resources.sh script to prepare the project
./2.create-resources.sh

# Call the 3.deploy.sh script to deploy the proxies and services
./3.deploy.sh
```

After deploying, you can reach the dashboard UI at **https://APIGEE_ENVGROUP_HOST/dashboard**.

You can create new orders using a cURL command, and you will see them broadcast immediately to the dashboard via a websocket connection in the API proxy. The location service will also fetch a location and display the order on the map.

```sh
ORDER_ID=994000304
curl -X POST "https://$APIGEE_ENVGROUP_HOST/orderservice/orders" \
	-H "Content-Type: application/json" \
	--data-binary @- << EOF
{
	"SalesOrder": "$ORDER_ID",
	"CreatedByUser": "TYLER",
	"TotalNetAmount": "988.41"
}
EOF
```