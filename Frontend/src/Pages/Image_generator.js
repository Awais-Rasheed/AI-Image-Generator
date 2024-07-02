import React, { useState } from 'react';
import axios from 'axios';
import './Image_generator.css';

export default function ImageGenerator() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('');

    const handleGenerateContent = async () => {
        try {
            setLoading(true);
            setError(null); // Reset the error state before making a new request
            const res = await axios.post('http://localhost:5000/api/image', { prompt });
            setImage(res.data);
            setPrompt(''); // Clear the prompt input field after submission
        } catch (err) {
            setError('Error generating content: ' + err.message);
            console.error('Error generating content:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
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
            
            {loading && (
                <div className="loading">
                    <img className="shape" src="img/shape.svg" alt="Logo" width="100px" height="100px" />
                </div>
            )}

            {error && <p>Error: {error}</p>}

            {!loading && !error && !image && <p>No image available</p>}

            {image && (
                <div className="img">
                    <img src={image} alt="Generated" />
                </div>
            )}
        </div>
    );
}
