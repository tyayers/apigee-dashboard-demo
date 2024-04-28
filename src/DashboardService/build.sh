PROJECT=$(gcloud config get project)

gcloud builds submit --tag "eu.gcr.io/$PROJECT/dashboardservice"

gcloud run deploy dashboardservice --image eu.gcr.io/$PROJECT/dashboardservice --platform managed \
  --project $PROJECT --region europe-west1 --allow-unauthenticated \
  --set-env-vars apiHost=dev.34-36-221-53.nip.io,mapKey=J6uJf5Vb327rrJtNQHcO1B06uvYTwL1tRrvl3K7Ey5WmjZX2,orderKey=J6uJf5Vb327rrJtNQHcO1B06uvYTwL1tRrvl3K7Ey5WmjZX2
