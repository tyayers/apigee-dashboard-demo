#!/bin/bash

set -e

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set"
exit
fi

if [ -z "$LOCATION" ]
then
echo "No LOCATION variable set"
exit
fi

if [ -z "$CLUSTERNAME" ]
then
echo "No CLUSTERNAME variable set"
exit
fi

if [ -z "$API_GATEWAY_NAMESPACE" ]
then
echo "No API_GATEWAY_NAMESPACE variable set"
exit
fi

echo "Updating default compute account permissions..."
PROJECTNUMBER=$(gcloud projects list --filter="$(gcloud config get-value project)" --format="value(PROJECT_NUMBER)")
gcloud projects add-iam-policy-binding $PROJECT --member="serviceAccount:$PROJECTNUMBER-compute@developer.gserviceaccount.com" --role='roles/storage.objectViewer'

sleep 2s

gcloud container clusters get-credentials $CLUSTERNAME \
--project=$PROJECT \
--zone=$LOCATION

kubectl config set-context $CLUSTERNAME

export REVISION=$(kubectl get deploy -n istio-system -l app=istiod -o \
  jsonpath={.items[*].metadata.labels.'istio\.io\/rev'}'{"\n"}')

echo "Found Istio revsion $REVISION"

echo "Creating namespace..."
kubectl apply -f \
  kubernetes-manifests/namespaces

for ns in sap; do
  kubectl label namespace $ns istio.io/rev=$REVISION --overwrite
done;

echo "Building containers..."
cd src/orderservice
./build.sh

cd ../..

echo "Deploying containers..."
sed -i "s@{PROJECT}@$PROJECT@" kubernetes-manifests/deployments/orderservice.yaml
kubectl apply -f kubernetes-manifests/deployments/orderservice.yaml -n sap

echo "Updating API gateway ingress..."
kubectl apply -f kubernetes-manifests/api-ingressgateway/. -n $API_GATEWAY_NAMESPACE