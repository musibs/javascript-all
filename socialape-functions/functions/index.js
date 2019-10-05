const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const app = express();

const firebaseConfig = {
    apiKey: "AIzaSyBx7iMsR66eNvXVUkaTsPRomZGhliToTxI",
    authDomain: "socialape-874b9.firebaseapp.com",
    databaseURL: "https://socialape-874b9.firebaseio.com",
    projectId: "socialape-874b9",
    storageBucket: "socialape-874b9.appspot.com",
    messagingSenderId: "939349565006",
    appId: "1:939349565006:web:c79ad3a228c16b2d4fad1f"
  };
const firebase = require('firebase');  
firebase.initializeApp(firebaseConfig);

app.get('/screams', (request, response) => {
    admin
    .firestore()
    .collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then(data => {
        let screams = [];
        data.forEach(doc => {
            screams.push({
                screamId: doc.id,
                body: doc.data().body,
                userHandle: doc.data().userHandle,
                createdAt: doc.data().createdAt
            });
        })
        return response.json(screams);
    })
    .catch(err => console.error(err))
})

app.post('/scream', (request, response) => {
    const newScream = {
        userHandle : request.body.userHandle,
        body: request.body.body,
        createdAt: new Date().toISOString()
    }

    admin.firestore().collection('screams')
        .add(newScream)
        .then(doc => {
            response.json( {message : `document ${doc.id} created successfully`});
        })
        .catch(err => {
            esponse.status(500).json({error : `something went wrong ${err}`});
            console.error(err);
        });
});

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello World!");
// });

// exports.getScreams = functions.https.onRequest((request, response) => {
//     admin.firestore().collection('screams').get()
//     .then(data => {
//         let screams = [];
//         data.forEach(doc => {
//             screams.push(doc.data());
//         })
//         return response.json(screams);
//     })
//     .catch(err => console.error(err))
// })

// exports.createScream = functions.https.onRequest((request, response) => {
//     if(request.method !== 'POST'){
//         return response.status(400).json({error : `Bad request. Method not allowed`});
//     }

//     const newScream = {
//         userHandle : request.body.userHandle,
//         body: request.body.body,
//         createdAt: admin.firestore.Timestamp.fromDate(new Date())
//     }

//     admin.firestore().collection('screams')
//         .add(newScream)
//         .then(doc => {
//             response.json( {message : `document ${doc.id} created successfully`});
//         })
//         .catch(err => {
//             esponse.status(500).json({error : `something went wrong ${err}`});
//             console.error(err);
//         });
// });


// Baseurl : https://baseurl.com/api/

exports.api = functions.region('asia-northeast1').https.onRequest(app);