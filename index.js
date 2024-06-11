import { Storage } from '@google-cloud/storage'

const bucketName = process.env.GCS_BUCKET

const fileName = process.env.GCS_FILENAME

const storage = new Storage()

async function generateV4ReadSignedUrl() {
  const options = {
    version: 'v4',
    action: 'read',
    virtualHostedStyle: true,
    expires: Date.now() + 15 * 60 * 1000
  }

  const response = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options)

  console.log(response)
}

;(async () => {
  await generateV4ReadSignedUrl()
})().catch(err => {
    console.error(err)
})
