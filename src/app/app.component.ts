import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-05ghnwC3Xc388l_O95OIAxmwy3hdSTw",
  authDomain: "foodfinder-3a3c6.firebaseapp.com",
  projectId: "foodfinder-3a3c6",
  storageBucket: "foodfinder-3a3c6.appspot.com",
  messagingSenderId: "171521023567",
  appId: "1:171521023567:web:f06eb706a6c600f1f1143a",
  measurementId: "G-RFQ34YVYD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
