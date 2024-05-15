# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/bin/bash

# The GCP project ID to deploy to. Your user must be logged into gcloud editor rights for the project.
export PROJECT_ID=
# The GCP region to deploy the services to.
export REGION=
# A valid Google Maps API key. You can get a key from the GCP API console.
export GMAPS_KEY=
# The Apigee environment to deploy the proxies to.
export APIGEE_ENV=
# The Apigee environment group host path, or root URL, for the proxies, for example dev.36-36-221-53.nip.io.
export APIGEE_ENVGROUP_HOST=