const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const genAI = new GoogleGenerativeAI('AIzaSyAnE8igl17XMOhUh_kXCd4t_ujsSat26hk');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.use(cors());
app.use(bodyParser.json());

// Route to handle POST requests and generate content based on the prompt
app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;
    console.log('Received prompt:', prompt);

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text(); // Ensure text is awaited

        res.json({ generatedContent: text });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Error generating content' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
