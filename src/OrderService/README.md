# SAP SalesOrders OData Mock

This provides a simle OData endpoint of the [SAP SalesOrders API](https://api.sap.com/api/salesorder/resource) with support for simple operations to add and retrieve SalesOrders.  This is for purely testing purposes in integration projects.

# Deployment

To deploy either clone and build the docker image yourself, or just click this button to deploy directly to [Google Cloud Run](https://cloud.google.com/run).

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

To run locally using GO:

`go run orderservice.go`

To build and run locally using docker:

```
docker build -t local/sap-orders-mock .
docker run -p 8080:8080 local/sap-orders-mock
```

# Test

To test on Cloud Run, call this endpoint:
`curl [YOUR_CLOUDRUN_ENDPOINT]/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder`

To test locally, call this endpoint:
`curl http://localhost:8080/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder`

You should get a lot of SalesOrders returned.  You can also POST new records to the endpoint, which will be persisted in memory until the Cloud Run instance is scaled down.
