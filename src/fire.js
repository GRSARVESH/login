import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBt9PI5SKxITj9GaqdR1ZVa5MMXoW_IdEY",
    authDomain: "login-f472b.firebaseapp.com",
    projectId: "login-f472b",
    storageBucket: "login-f472b.appspot.com",
    messagingSenderId: "801116321190",
    appId: "1:801116321190:web:6f38b787da52d2dc648b67",
    measurementId: "G-G5Z5V4KJ3H"
  };
  const fire=firebase.initializeApp(firebaseConfig);
export default fire;