import Express from 'express';
import router from './routes/routes.js';

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());
app.use('/', (router));
app.use(Express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});