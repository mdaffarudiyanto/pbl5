import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3001', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

const items = [];
exports.getItems = functions.region('us-central1').https.onRequest((request, response) => {
    // CORS用にAccess-Control-Allow系ヘッダを追加
    response.set('Access-Control-Allow-Origin', 'https://mdaffarudiyanto.github.io/'); // localhostを許可
    response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST'); // DELETEだけは拒否
    response.set('Access-Control-Allow-Headers', 'Content-Type'); // Content-Typeのみを許可

    response.json({ items });
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// App.use(cors(corsOptions));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
