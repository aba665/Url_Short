import express from 'express';
import dataController from './src/controllers/dataController.js';

const app = express();

app.use(express.json());

app.get('/', dataController.read);

app.get('/url/:hash', dataController.redirect);

app.post('/url', dataController.save);

app.listen(3000, () => {
    console.log('Server running!');
})