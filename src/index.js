import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Amplify } from 'aws-amplify';
import './index.css';

// Placeholder for Amplify configuration (update after backend setup)
Amplify.configure({
  aws_appsync_graphqlEndpoint: 'YOUR_APPSYNC_ENDPOINT',
  aws_appsync_region: 'YOUR_REGION',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'YOUR_API_KEY',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);