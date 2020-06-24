import * as admin from 'firebase-admin'
import serviceAccount from "../lib/developerssources-1c42e-firebase-adminsdk-817oc-96ea9113fb.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export function addData() {
  let docRef = db.collection('users').doc('alovelace');
  let setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
}

// const db = admin.firestore()
// const websitesCollectionRef = db.collection('websites')
// const coursesCollectionRef = db.collection('courses')