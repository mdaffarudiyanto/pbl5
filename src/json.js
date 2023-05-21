export const json = {
    "title": "PBL 5",
    "description": "Muhammad Daffa Rudiyanto (Student ID: 26002104783)",
    "logoPosition": "right",
    "pages": [
     {
      "name": "introduction",
      "elements": [
       {
        "type": "html",
        "name": "question36",
        "html": "<p>\nDear Participant,\n<br>\n<br>\nWe would like to invite you to take part in a fascinating survey that explores the auditory experience of electric vehicles. As the world shifts towards greener transportation options, electric vehicles are becoming increasingly common on our roads. However, these vehicles operate differently from traditional internal combustion engine cars, emitting unique sounds or, in some cases, running silently. In this survey, we aim to gather valuable insights into how people perceive and respond to various sound profiles emitted by electric vehicles as they pass by. Your participation will contribute to our understanding of the impact of sound on road safety and public acceptance of electric vehicles. Thank you for joining us on this exciting exploration of sound and transportation!\n</p>"
       }
      ],
      "title": "Introduction"
     },
     {
      "name": "demographic",
      "elements": [
       {
        "type": "radiogroup",
        "name": "age",
        "title": "Age",
        "isRequired": true,
        "choices": [
         "< 18 years old",
         "18 - 25 years old",
         "26 - 39 years old",
         "40 - 60 years old",
         "> 60 years old"
        ]
       },
       {
        "type": "radiogroup",
        "name": "Gender",
        "title": "Gender",
        "isRequired": true,
        "choices": [
         "male",
         "female",
         "others",
         "prefer not to answer"
        ]
       }
      ],
      "title": "Demographic Question"
     },
     {
      "name": "sound1",
      "elements": [
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "html",
          "name": "question37",
          "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0XQHpt64EzE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "sound1-Do you hear the sound?",
        "title": "Do you hear the sound?",
        "isRequired": true,
        "choices": [
         {
          "value": "sound1-yes",
          "text": "Yes"
         },
         {
          "value": "sound1-no",
          "text": "No"
         }
        ]
       },
       {
        "type": "rating",
        "name": "sound1-Sound Awareness",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Sound Awareness",
        "isRequired": true,
        "autoGenerate": false,
        "rateValues": [
         1,
         2,
         3,
         4,
         5
        ],
        "minRateDescription": "Not aware at all",
        "maxRateDescription": "Very aware"
       },
       {
        "type": "rating",
        "name": "sound1-Calm or Panic?",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Calm or Panic?",
        "isRequired": true,
        "autoGenerate": false,
        "rateValues": [
         1,
         2,
         3,
         4,
         5
        ],
        "minRateDescription": "Calm",
        "maxRateDescription": "Panic"
       },
       {
        "type": "rating",
        "name": "sound1-Comfortable or Scared",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Comfortable or Scared",
        "isRequired": true,
        "autoGenerate": false,
        "rateValues": [
         1,
         2,
         3,
         4,
         5
        ],
        "minRateDescription": "Comfortable",
        "maxRateDescription": "Scared"
       },
       {
        "type": "rating",
        "name": "sound1-Pleasant or Annoying",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Pleasant or Annoying",
        "isRequired": true,
        "autoGenerate": false,
        "rateValues": [
         1,
         2,
         3,
         4,
         5
        ],
        "minRateDescription": "Pleasant",
        "maxRateDescription": "Annoying"
       },
       {
        "type": "rating",
        "name": "sound1-Relax or Nervous",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Relax or Nervous",
        "isRequired": true,
        "autoGenerate": false,
        "rateValues": [
         1,
         2,
         3,
         4,
         5
        ],
        "minRateDescription": "Relax",
        "maxRateDescription": "Nervous"
       },
       {
        "type": "rating",
        "name": "sound1-Focus or Distracted",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Focus or Distracted",
        "isRequired": true,
        "minRateDescription": "Focus",
        "maxRateDescription": "Distracted"
       },
       {
        "type": "rating",
        "name": "sound1-Obedient or Attacked",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "Obedient or Attacked",
        "isRequired": true,
        "minRateDescription": "Obedient",
        "maxRateDescription": "Attack"
       },
       {
        "type": "rating",
        "name": "sound1-How far is the sound?",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "How far is the sound?",
        "isRequired": true,
        "minRateDescription": "Near",
        "maxRateDescription": "Far"
       },
       {
        "type": "rating",
        "name": "sound1-How loud is the sound?",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "How loud is the sound?",
        "isRequired": true,
        "minRateDescription": "Quite",
        "maxRateDescription": "Loud"
       },
       {
        "type": "rating",
        "name": "sound1-question13",
        "visibleIf": "{sound1-Do you hear the sound?} = 'sound1-yes'",
        "title": "How big is the vehicle?",
        "isRequired": true,
        "minRateDescription": "Small",
        "maxRateDescription": "Big"
       }
      ],
      "title": "Sound 1"
     }
    ]
   }