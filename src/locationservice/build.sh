gcloud builds submit --tag "eu.gcr.io/$PROJECT/locationservice"

gcloud run deploy locationservice --image eu.gcr.io/$PROJECT/locationservice --platform managed --project $PROJECT --region europe-west1 --allow-unauthenticated
