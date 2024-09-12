import React, { useState } from "react";
import axios from "axios";

function Hello(){
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
    
    const apiKey = "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";
  
    const askChatGPT = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            model: 'text-davinci-003',
            prompt: question,
            max_tokens: 150,
            temperature: 0.7,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setResponse(res.data.choices[0].text);
      } catch (error) {
        console.error('Error fetching data from API', error);
        setResponse('Something went wrong. Please try again later.');
      }
      setLoading(false);
    };
  
    return (
      <div className="App">
        <h1>Ask ChatGPT</h1>
        <form onSubmit={askChatGPT}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Ask'}
          </button>
        </form>
        <div className="response">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      </div>
    );
  }
  
  
export default Hello;