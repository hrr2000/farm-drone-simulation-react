import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirestoreProvider } from 'react-firestore';

const firestoreConfig = {
    apiKey: 'AIzaSyBRa0FWIssVS-O-2uDyEqCYkn0U1gp8SSs',
    projectId: 'drone-app-59fed',
};

firebase.initializeApp(firestoreConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FirestoreProvider firebase={firebase}>
        <App />
      </FirestoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
