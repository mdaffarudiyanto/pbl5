import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
  const survey = new Model(json);
  
  survey.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://pbl5-mdr-default-rtdb.firebaseio.com/survey");
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