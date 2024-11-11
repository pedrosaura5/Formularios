const firebaseConfig = {
    apiKey: "AIzaSyBz8Vq4890luKLdOEenI7TYrthEJekkh54",
    authDomain: "autentificacion-8c5ce.firebaseapp.com",
    projectId: "autentificacion-8c5ce",
    storageBucket: "autentificacion-8c5ce.firebasestorage.app",
    messagingSenderId: "166053405899",
    appId: "1:166053405899:web:f40535227d3ac94d4ee74e",
    measurementId: "G-9BF4TNFWGM"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
