import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBV6vRKz2CuPx9GlNnGD89FiRS-yH7eGys",
//   authDomain: "pbl5-mdr.firebaseapp.com",
//   databaseURL: "https://pbl5-mdr-default-rtdb.firebaseio.com",
//   projectId: "pbl5-mdr",
//   storageBucket: "pbl5-mdr.appspot.com",
//   messagingSenderId: "163531844929",
//   appId: "1:163531844929:web:c02b60ff032930f0b8c5c0",
//   measurementId: "G-6645BR6Q6N"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function SurveyComponent() {
  const survey = new Model(json);
  
  survey.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://pbl5-mdr-default-rtdb.firebaseio.com");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
      }
    };
    xhr.onerror = function () {
      // Display the "Error" message (pass a string value to display a custom message)
      options.showSaveError();
    };
    xhr.send(JSON.stringify(sender.data));
  });

  return <Survey model={survey} />;
}

export default SurveyComponent;