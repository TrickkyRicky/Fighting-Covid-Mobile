import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDF9pQWa3jeZ8tEddCxPA-Rn5k0SAOGgcM",
  authDomain: "fighting-covid-aee84.firebaseapp.com",
  databaseURL: "https://fighting-covid-aee84-default-rtdb.firebaseio.com",
  projectId: "fighting-covid-aee84",
  storageBucket: "fighting-covid-aee84.appspot.com",
  messagingSenderId: "303904689733",
  appId: "1:303904689733:web:43c9a755f4e8d1dcc85d2c",
  measurementId: "G-S3YRN7HWYX",
};
Firebase.initializeApp(firebaseConfig);

export const realTimeData = Firebase.database();
