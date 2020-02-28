import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA26kuPaJNVkj_qxbATVDEyupyFLIC9a3I',
  authDomain: 'nextonfirebase-5114c.firebaseapp.com',
  databaseURL: 'https://nextonfirebase-5114c.firebaseio.com',
  projectId: 'nextonfirebase-5114c',
  storageBucket: 'nextonfirebase-5114c.appspot.com',
  messagingSenderId: '612732302702',
  appId: '1:612732302702:web:6109385cc4eca26b6ffd7f',
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
