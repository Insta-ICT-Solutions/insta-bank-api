const admin = require('firebase-admin');
const serviceAccount = require('../utils/insta-bank-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://insta-bank-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };
