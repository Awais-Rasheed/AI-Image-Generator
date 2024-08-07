const fetch = require('node-fetch');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const url = 'https://api.getimg.ai/v1/essential/text-to-image';

app.post('/api/image', async (req, res) => {
    const { prompt } = req.body;
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer YOUR_BEARER_TOKKEN' //get from getimg.ai
        },
        body: JSON.stringify({
            style: 'photorealism',
            prompt: prompt,
            height: 1024,
            output_format: 'png',
            width: 1024,
            response_format: 'url'
        })
    };

    try {
        const apiRes = await fetch(url, options);
        const json = await apiRes.json();
        if (json.url) {
            res.json(json.url);
        } else {
            throw new Error('No image URL in response');
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
