gcloud builds submit --tag "eu.gcr.io/$PROJECT/broadcastservice"
gcloud run deploy broadcastservice --image eu.gcr.io/$PROJECT/broadcastservice --platform managed --project $PROJECT --region europe-west1 --allow-unauthenticated
