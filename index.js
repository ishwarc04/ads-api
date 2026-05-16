import express from 'express';
import { getADS, getGeminiResponse, homePage } from './controller/apiController.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', homePage);

app.get('/:item', getADS);

app.get('/q/:ds', getGeminiResponse);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});