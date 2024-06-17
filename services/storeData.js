const admin = require("firebase-admin");
const serviceAccount = require ("../creds2.json");

const { default: firebase } = require("firebase/compat/app");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://storage-e2229-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "gs://storage-e2229.appspot.com"
});

const bucket = admin.storage().bucket();
const db = admin.firestore();

module.exports = { admin, bucket, db};