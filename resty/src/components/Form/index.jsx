import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [jsonBody, setJsonBody] = useState('');

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      jsonBody: jsonBody,
    };
    props.handleApiCall(formData);
  };

  const handleJsonBodyChange = (e) => {
    setJsonBody(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input
          name="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <button onClick={() => handleMethodChange('GET')}>GET</button>
        <button onClick={() => handleMethodChange('POST')}>POST</button>
        <button onClick={() => handleMethodChange('PUT')}>PUT</button>
        <button onClick={() => handleMethodChange('DELETE')}>DELETE</button>
      </label>
      <label>
        Post and update
        <textarea
          id="myTextarea"
          name="comments"
          rows="4"
          cols="100"
          placeholder="JSON format"
          value={jsonBody}
          onChange={handleJsonBodyChange}
        ></textarea>
      </label>
    </form>
  );
}

export default Form;
