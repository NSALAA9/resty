import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    setLoading(true);

    try {
      const response = await axios.get(requestParams.url);
      setApiData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }

    setRequestParams(requestParams);
    setLoading(false);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="request-info">
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
      </div>
      <Form handleApiCall={callApi} />
      <Results data={apiData} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
