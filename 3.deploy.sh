
gcloud config set project $PROJECT_ID

# Deploy OrderService
NAME=OrderService
NAME_LOWERCASE=${NAME,,}
cd ./src/$NAME
# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE"
# Deploy to Cloud Run
gcloud run deploy $NAME_LOWERCASE --image "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE" --platform managed --project "$PROJECT_ID" \
	--region $REGION --no-allow-unauthenticated
# Get Cloud Run URL and write to the Apigee KVM to use in the proxy
SERVICE_URL=$(gcloud run services describe $NAME_LOWERCASE --format 'value(status.url)' --region $REGION)
apigeecli kvms entries create -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token) 2>/dev/null
apigeecli kvms entries update -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token)
apigeecli kvms entries create -m dash-keys -k location_feature_flag -l false -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token) 2>/dev/null
apigeecli kvms entries update -m dash-keys -k location_feature_flag -l false -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token)
cd ../..
# Deploy proxy
cd ./proxies/$NAME
apigeecli apis create bundle -f apiproxy --name $NAME -o $PROJECT_ID -t $(gcloud auth print-access-token)
apigeecli apis deploy -n $NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) -s "dashservice@$PROJECT_ID.iam.gserviceaccount.com" --ovr
cd ../..

# Deploy LocationService
NAME=LocationService
NAME_LOWERCASE=${NAME,,}
cd ./src/$NAME
# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE"
# Deploy to Cloud Run
gcloud run deploy $NAME_LOWERCASE --image "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE" --platform managed --project "$PROJECT_ID" \
	--region $REGION --no-allow-unauthenticated
# Get Cloud Run URL and write to the Apigee KVM to use in the proxy
SERVICE_URL=$(gcloud run services describe $NAME_LOWERCASE --format 'value(status.url)' --region $REGION)
apigeecli kvms entries create -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token) 2>/dev/null
apigeecli kvms entries update -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token)
cd ../..
# Deploy proxy
cd ./proxies/$NAME
apigeecli apis create bundle -f apiproxy --name $NAME -o $PROJECT_ID -t $(gcloud auth print-access-token)
apigeecli apis deploy -n $NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) -s "dashservice@$PROJECT_ID.iam.gserviceaccount.com" --ovr
cd ../..

# Deploy BroadcastService
NAME=BroadcastService
NAME_LOWERCASE=${NAME,,}
cd ./src/$NAME
# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE"
# Deploy to Cloud Run
gcloud run deploy $NAME_LOWERCASE --image "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE" --platform managed --project "$PROJECT_ID" \
	--region $REGION --no-allow-unauthenticated
# Get Cloud Run URL and write to the Apigee KVM to use in the proxy
SERVICE_URL=$(gcloud run services describe $NAME_LOWERCASE --format 'value(status.url)' --region $REGION)
apigeecli kvms entries create -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token) 2>/dev/null
apigeecli kvms entries update -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token)
cd ../..
# Deploy proxy
cd ./proxies/$NAME
apigeecli apis create bundle -f apiproxy --name $NAME -o $PROJECT_ID -t $(gcloud auth print-access-token)
apigeecli apis deploy -n $NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) -s "dashservice@$PROJECT_ID.iam.gserviceaccount.com" --ovr
cd ../..

# Deploy DashboardService
NAME=DashboardService
NAME_LOWERCASE=${NAME,,}
cd ./src/$NAME
# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE"
# Deploy to Cloud Run
gcloud run deploy $NAME_LOWERCASE --image "eu.gcr.io/$PROJECT_ID/$NAME_LOWERCASE" --platform managed --project "$PROJECT_ID" \
	--region $REGION --no-allow-unauthenticated \
  --set-env-vars apiHost=$APIGEE_ENVGROUP_HOST
# Get Cloud Run URL and write to the Apigee KVM to use in the proxy
SERVICE_URL=$(gcloud run services describe $NAME_LOWERCASE --format 'value(status.url)' --region $REGION)
apigeecli kvms entries create -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token) 2>/dev/null
apigeecli kvms entries update -m dash-keys -k "$NAME_LOWERCASE"_url -l $SERVICE_URL -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token)
cd ../..
# Deploy proxy
cd ./proxies/$NAME
apigeecli apis create bundle -f apiproxy --name $NAME -o $PROJECT_ID -t $(gcloud auth print-access-token)
apigeecli apis deploy -n $NAME -o $PROJECT_ID -e $APIGEE_ENV -t $(gcloud auth print-access-token) -s "dashservice@$PROJECT_ID.iam.gserviceaccount.com" --ovr
cd ../..