
# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT_ID/orderservice"

gcloud run deploy orderservice --image "eu.gcr.io/$PROJECT_ID/orderservice" --platform managed --project "$PROJECT_ID" \
	--region $REGION --no-allow-unauthenticated