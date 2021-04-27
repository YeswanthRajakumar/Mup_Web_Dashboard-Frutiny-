  var firebaseConfig = {
    apiKey: "AIzaSyBORkIIZF9Ie5mv_Xf6IwCMtVveO2-r2HY",
    authDomain: "frutiny-b889b.firebaseapp.com",
    databaseURL: "https://frutiny-b889b-default-rtdb.firebaseio.com",
    projectId: "frutiny-b889b",
    storageBucket: "frutiny-b889b.appspot.com",
    messagingSenderId: "503728358470",
    appId: "1:503728358470:web:8159ff41d9fde1512db647",
    measurementId: "G-8KCZF5W5WS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log(firebase)



//   firebase
//     .database()
//     .ref("fruitiny_Width")
//     .on("value", (snap) => {
//       console.log(snap.val());
//     });