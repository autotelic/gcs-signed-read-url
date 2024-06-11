### Signed Read URL for Google Cloud Storage

#### How to run example:

1. Ensure that gcloud is installed on your terminal
2. Ensure that you have a service account setup on the GCP project that you will be using, or have permissions to impersonate a service account
    - for impersonating a service account, run the following commands to authenticate before continuing:
    - ```sh
      gcloud config set project <gcp project name>
      ```
    - ```sh
      gcloud auth application-default login --impersonate-service-account <service account email>
      ```
3. Have the GCS_BUCKET and a filename in the bucket under GCS_FILENAME in your `.env` or `.envrc`
4. Run the example with `node .`
5. A signed link to the filename specified in the environment variables should appear as an output from the example. Opening the link in your browser should display or give access to the file.
