provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "public_bucket" {
  bucket = "snyk-demo-public-bucket"
  acl    = "public-read"
}
