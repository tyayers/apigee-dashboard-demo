gcloud config set project $PROJECT_ID

# Enable APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com

# Create a service account and give cloud run invoker rights
gcloud iam service-accounts create dashservice \
    --description="Dashbaord service account" \
    --display-name="Dash service"
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member="serviceAccount:dashservice@$PROJECT_ID.iam.gserviceaccount.com" \
--role="roles/run.invoker"

# Set Google maps key to KVM
apigeecli kvms create -e $APIGEE_ENV -n dash-keys -o $PROJECT_ID -t $(gcloud auth print-access-token)
apigeecli kvms entries create -m dash-keys -k gmaps_key -l $GMAPS_KEY -e $APIGEE_ENV -o $PROJECT_ID -t $(gcloud auth print-access-token)
