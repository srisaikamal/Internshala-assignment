import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAzmrGRC4TmoxJi1yTDpfXGvpQAMYDphys",
  authDomain: "internshala-project.firebaseapp.com",
  databaseURL: "https://internshala-project.firebaseio.com",
  projectId: "internshala-project",
  storageBucket: "internshala-project.appspot.com",
  messagingSenderId: "663238769047",
  appId: "1:663238769047:web:e2a5236731a9602639acd2",
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire.database().ref();
