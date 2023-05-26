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
      "html": "<p>\nDear Participant,\n<br>\n<br>\nAs the world shifts towards greener transportation options, electric vehicles are becoming increasingly common on our roads. However, these vehicles operate differently from traditional internal combustion engine cars, emitting unique sounds or, in some cases, running silently. This survey aims to gather valuable insights into how people perceive and respond to various sound profiles emitted by electric vehicles as they pass by. Your participation will contribute to our understanding of the impact of sound on road safety and public acceptance of electric vehicles. \n</p>"
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
    "name": "presurvey",
    "elements": [
     {
      "type": "html",
      "name": "question25",
      "html": "<p>Now, when you begin the survey, click on the play button located at the top of the page.</p>\n<br>\n<p>Please close your eyes and visualize yourself walking down a street during rainy weather. While you listen to the audio sample, you will hear the sound of an electric vehicle approaching from your side.</p>\n<br>\n<p>Once the sound concludes, kindly proceed to answer the survey. You can always replay the sound if necessary.</p>"
     }
    ],
    "title": "Before you start"
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
        "html": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522915429%3Fsecret_token%3Ds-XZx5WPYSTTc&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/m-daffa-rudiyanto\" title=\"M Daffa Rudiyanto\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">M Daffa Rudiyanto</a> · <a href=\"https://soundcloud.com/m-daffa-rudiyanto/thesound-sea-of-glass-ceg34/s-XZx5WPYSTTc\" title=\"thesound - sea of glass CEG34\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">thesound - sea of glass CEG34</a></div>"
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
   },
   {
    "name": "sound2",
    "elements": [
     {
      "type": "panel",
      "name": "panel2",
      "elements": [
       {
        "type": "html",
        "name": "question1",
        "html": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522921576%3Fsecret_token%3Ds-ERvvhIEdjL0&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/m-daffa-rudiyanto\" title=\"M Daffa Rudiyanto\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">M Daffa Rudiyanto</a> · <a href=\"https://soundcloud.com/m-daffa-rudiyanto/thesound-boarding-area-ceg23/s-ERvvhIEdjL0\" title=\"thesound - boarding area CEG23\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">thesound - boarding area CEG23</a></div>"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question2",
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
      "name": "question3",
      "visibleIf": "{question2} = 'sound1-yes'",
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
      "name": "question4",
      "visibleIf": "{question2} = 'sound1-yes'",
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
      "name": "question5",
      "visibleIf": "{question2} = 'sound1-yes'",
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
      "name": "question6",
      "visibleIf": "{question2} = 'sound1-yes'",
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
      "name": "question7",
      "visibleIf": "{question2} = 'sound1-yes'",
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
      "name": "question8",
      "visibleIf": "{question2} = 'sound1-yes'",
      "title": "Focus or Distracted",
      "isRequired": true,
      "minRateDescription": "Focus",
      "maxRateDescription": "Distracted"
     },
     {
      "type": "rating",
      "name": "question9",
      "visibleIf": "{question2} = 'sound1-yes'",
      "title": "Obedient or Attacked",
      "isRequired": true,
      "minRateDescription": "Obedient",
      "maxRateDescription": "Attack"
     },
     {
      "type": "rating",
      "name": "question10",
      "visibleIf": "{question2} = 'sound1-yes'",
      "title": "How far is the sound?",
      "isRequired": true,
      "minRateDescription": "Near",
      "maxRateDescription": "Far"
     },
     {
      "type": "rating",
      "name": "question11",
      "visibleIf": "{question2} = 'sound1-yes'",
      "title": "How loud is the sound?",
      "isRequired": true,
      "minRateDescription": "Quite",
      "maxRateDescription": "Loud"
     },
     {
      "type": "rating",
      "name": "question12",
      "visibleIf": "{question2} = 'sound1-yes'",
      "title": "How big is the vehicle?",
      "isRequired": true,
      "minRateDescription": "Small",
      "maxRateDescription": "Big"
     }
    ],
    "title": "Sound 2"
   },
   {
    "name": "sound3",
    "elements": [
     {
      "type": "panel",
      "name": "panel3",
      "elements": [
       {
        "type": "html",
        "name": "question13",
        "html": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522926457%3Fsecret_token%3Ds-Zr0HPFI6yqN&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/m-daffa-rudiyanto\" title=\"M Daffa Rudiyanto\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">M Daffa Rudiyanto</a> · <a href=\"https://soundcloud.com/m-daffa-rudiyanto/thesound-full-brass-ce34/s-Zr0HPFI6yqN\" title=\"thesound - full brass CE34\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">thesound - full brass CE34</a></div>"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question14",
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
      "name": "question15",
      "visibleIf": "{question14} = 'sound1-yes'",
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
      "name": "question16",
      "visibleIf": "{question14} = 'sound1-yes'",
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
      "name": "question17",
      "visibleIf": "{question14} = 'sound1-yes'",
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
      "name": "question18",
      "visibleIf": "{question14} = 'sound1-yes'",
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
      "name": "question19",
      "visibleIf": "{question14} = 'sound1-yes'",
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
      "name": "question20",
      "visibleIf": "{question14} = 'sound1-yes'",
      "title": "Focus or Distracted",
      "isRequired": true,
      "minRateDescription": "Focus",
      "maxRateDescription": "Distracted"
     },
     {
      "type": "rating",
      "name": "question21",
      "visibleIf": "{question14} = 'sound1-yes'",
      "title": "Obedient or Attacked",
      "isRequired": true,
      "minRateDescription": "Obedient",
      "maxRateDescription": "Attack"
     },
     {
      "type": "rating",
      "name": "question22",
      "visibleIf": "{question14} = 'sound1-yes'",
      "title": "How far is the sound?",
      "isRequired": true,
      "minRateDescription": "Near",
      "maxRateDescription": "Far"
     },
     {
      "type": "rating",
      "name": "question23",
      "visibleIf": "{question14} = 'sound1-yes'",
      "title": "How loud is the sound?",
      "isRequired": true,
      "minRateDescription": "Quite",
      "maxRateDescription": "Loud"
     },
     {
      "type": "rating",
      "name": "question24",
      "visibleIf": "{question14} = 'sound1-yes'",
      "title": "How big is the vehicle?",
      "isRequired": true,
      "minRateDescription": "Small",
      "maxRateDescription": "Big"
     }
    ],
    "title": "Sound 3"
   }
  ]
 }