
gcloud config set project $PROJECT_ID

# Deploy OrderService
NAME=orderservice
API_NAME=OrderService
cd ./src/$NAME
./build.sh
SERVICE_URL=$(gcloud run services describe $NAME --format 'value(status.url)' --region $REGION)
cd ../../proxies/orderproxy
zip "$API_NAME.zip" -r .
# upload proxy
apigeecli apis import -o $PROJECT_ID -f . -t $(gcloud auth print-access-token)
# deploy proxy to env
apigeecli apis deploy -n $API_NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) --ovr
cd ../..

NAME=DashboardService
cd ./proxies/dashboardproxy
zip "$NAME.zip" -r .
# upload proxy
apigeecli apis import -o $PROJECT_ID -f . -t $(gcloud auth print-access-token)
# deploy proxy to env
apigeecli apis deploy -n $NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) --ovr
cd ../..

NAME=BroadcastService
cd ./proxies/broadcastproxy
zip "$NAME.zip" -r .
# upload proxy
apigeecli apis import -o $PROJECT_ID -f . -t $(gcloud auth print-access-token)
# deploy proxy to env
apigeecli apis deploy -n $NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) --ovr
cd ../..