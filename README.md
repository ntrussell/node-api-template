# NodeJS/Express REST API Boilerplate Template w/ Mongoose, Multer, Multer-S3, AWS-SDK
 NodeJS REST API Boilerplate Template w/ File Upload Methods (Local Storage & S3). Fully functional CRUD REST API routes w/ Mongoose document relationships, Multer file upload to local storage (/server), Multer-S3 file upload to AWS S3 Bucket, saving uploaded image's URL to Mongoose document upon upload.
 
 # Installation
 
 ```bash
mpm install 
```

# Usage

```bash
nodemon . 
```
Add your own AWS Credentials to .env
```
.env

SECRET_ACCESS_KEY=<AWS Secret Access Key>

ACCESS_KEY_ID=<AWS Access Key ID>

AWS_BUCKET_NAME=<AWS Bucket Name>

AWS_REGION=<AWS Region>

AWS_Uploaded_File_URL_LINK=https://<bucket-name>.s3.amazonaws.com/
```
Add your own MongoDB Connection String to app.js

```
app.js

mongoose
    .connect(
        "mongodb+srv://<Mongo Connection String>"
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
```
