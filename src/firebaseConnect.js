import * as firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCprWKt715rCD1iOyrkWTw6cKL5CF42SfI",
  authDomain: "fir-rn-19c51.firebaseapp.com",
  databaseURL: "https://fir-rn-19c51.firebaseio.com",
  projectId: "fir-rn-19c51",
  storageBucket: "fir-rn-19c51.appspot.com",
  messagingSenderId: "139440226921"
};

firebase.initializeApp(config)
export const noteData = firebase.database().ref('dataForNote')