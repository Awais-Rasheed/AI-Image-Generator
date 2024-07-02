import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import './Generator.css';
import axios from 'axios';

export default function Generator() {
    const navitems = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'Login' },
        { id: 3, title: 'Register' },
    ];

    const [prompt, setPrompt] = useState('');
    const [history, setHistory] = useState([]);

    const handleGenerateContent = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/generate', { prompt });
            setHistory(prevHistory => [...prevHistory, { prompt, response: res.data.generatedContent }]);
            setPrompt(''); // Clear the prompt input field after submission
        } catch (error) {
            console.error('Error generating content:', error);
            setHistory(prevHistory => [...prevHistory, { prompt, response: 'Error generating content' }]);
        }
    };

    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <Link to='/' className='text-white'><button className="home-btn">Home</button></Link>
                    
                </div>
                <div className="Generator">
                <div className="form form-group">
                        <input
                            type="text"
                            className="text-field form-control m-3"
                            placeholder="Enter Prompt Here"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <button className="send home-btn m-2 btn-G" onClick={handleGenerateContent}>
                            Generate
                        </button>
                    </div>
                    <div className="text-output scroll-container">
                      {history.map((entry, index) => (
                        <div key={index}>
                          <p className='user_message'>{entry.prompt}</p>
                          <p className='content'>{entry.response}</p>
                        </div>
                      ))}
                    
                    </div>
                </div>
            </div>
        </>
    );
}
