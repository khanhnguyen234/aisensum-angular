> ### Angular codebase containing ChartJs examples that adheres to the [Aisensum AWS NodeJS](https://github.com/khanhnguyen234/aisensum-aws-nodejs) API.

### [Demo](https://d19culiq2w7sb5.cloudfront.net)

# Getting started

## Prerequisite

* Install Node.js, AWS CLI, Angular CLI
* In `aisensum-angular`, run `npm install`
* Run `cp .env.example .env`, edit `.env`

## Develop

* Run `npm run start`

## Build and deploy

In the root directory of this project:

* `npm run build`
* `npm run aws`
* `npm run deploy`

# How it works

## Deployment

Run `npm run aws` to create resource AWS:
- [AWS S3](https://aws.amazon.com/s3) can host a static website on Amazon S3.
- [AWS CloudFront](https://aws.amazon.com/cloudfront) can speed up the delivery of website.

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `npm run deploy` to synchronizes all files in the `dist/` directory to AWS S3 bucket.

