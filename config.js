// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDV1a3GfAraiXlPF2aGxQET2-hBrmoikg8",
    authDomain: "hanpon-portfolio.firebaseapp.com",
    projectId: "hanpon-portfolio",
    storageBucket: "hanpon-portfolio.appspot.com",
    messagingSenderId: "1040768399250",
    appId: "1:1040768399250:web:ad50fb2f326f3110a3334b",
    measurementId: "G-E82C321EW6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();