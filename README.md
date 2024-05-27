# Apigee Dashboard Demo App
This is a simple demo app for Apigee X that shows some real-time API communication between microservices deployed in GCP, a frontend, and APIs running in Apigee.

## Prerequisites
- A GCP project with Apigee X provisioned (see [Apigee X Getting started documentation](https://cloud.google.com/apigee/docs/api-platform/get-started/provisioning-intro) for info on getting Apigee X set up). You can also create a GCP project and Apigee X with a [simple terraform deployment](https://github.com/tyayers/apigee-x-tf-quickstart).
- The Google Cloud CLI [gcloud](https://cloud.google.com/sdk/docs/install) installed and autenticated.
- The Apigee automation tool [apigeecli](https://github.com/apigee/apigeecli) should be installed. It's used to automate tasks in Apigee X, the installation can also be run in the first line of the script below.

## Deployment
```sh
# If needed, install apigeecli
curl -L https://raw.githubusercontent.com/apigee/apigeecli/main/downloadLatest.sh | sh -
export PATH=$PATH:$HOME/.apigeecli/bin 

# Clone the repo assets
git clone https://github.com/tyayers/apigee-dashboard-demo.git
cd apigee-dashboard-demo

# First copy the 1.env.sh file to a local version
cp 1.env.sh 1.env.local.sh
# Edit the local file using nano or your editor of choice and set the environment variables
nano 1.env.local.sh

# Source the environment variables
source 1.env.local.sh

# Now call the create resources script to create a service account, set roles, etc..
./2.create-resources.sh

# Deploy the services and assets
./3.deploy.sh
```

After deploying, you can reach the dashboard UI at **https://APIGEE_ENVGROUP_HOST/dashboard**.

You can create new orders using a cURL command, and you will see them broadcast immediately to the dashboard via a websocket connection in the API proxy. The location service will also fetch a location and display the order on the map, if the `location_feature_flag` is enabled.

```sh
# Get existing orders
curl "https://$APIGEE_ENVGROUP_HOST/orderservice/orders"

# Create a new order
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

After creating an order, you can also enable the location feature flag to get the map view and location data by running the `4.turn_feature_flag_on.sh` script, and turning it back off again with `5.turn_feature_flag_off.sh`.

After waiting a few seconds, you can refresh the dashboard, and see the map view which will also automatically display new orders when they are created (and throw some confetti to celebrate).