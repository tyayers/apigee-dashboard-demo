
PROJECT=$(gcloud config get project)
TOKEN=$(gcloud auth print-access-token)

NAME=OrderService
cd ./proxies/orderproxy
zip "$NAME.zip" -r .
# upload proxy
apigeecli apis import -o $PROJECT -f . -t $TOKEN
# deploy proxy to env
apigeecli apis deploy -n $NAME -o $PROJECT -e dev -t $TOKEN --ovr
cd ..

