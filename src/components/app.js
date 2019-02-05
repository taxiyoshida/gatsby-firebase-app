import * as firebase from 'firebase'
import ReactGA from 'react-ga';

var config = {
  apiKey: "AIzaSyBmJpMXzroOd8gTaosrToO_OjwfMC-fC_s",
  authDomain: "axion-project.firebaseapp.com",
  databaseURL: "https://axion-project.firebaseio.com",
  projectId: "axion-project",
  storageBucket: "axion-project.appspot.com",
  messagingSenderId: "520166406584"
};
firebase.initializeApp(config);

ReactGA.initialize('UA-130570913-1');
ReactGA.pageview(window.location.pathname + window.location.search);