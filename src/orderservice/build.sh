# Enable APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com

# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT/saporderservice"

gcloud run deploy saporderservice --image "eu.gcr.io/$PROJECT/saporderservice" --platform managed --project "$PROJECT" \
	--region europe-west1 --allow-unauthenticated