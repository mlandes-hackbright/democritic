import express from 'express';

const app = express();
app.use(express.json());

const reviews = [];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

app.get('/api/reviews/:id', (req, res) => {
    const id = Number(req.params['id']);
    if (reviews[id] === undefined) {
        res.status(404);
        res.end();
        return;
    }

    res.json(reviews[id]);
});

app.post('/api/reviews', (req, res) => {
    const review = req.body;
    reviews.push(review);
    res.status(201);
    res.end();
});

app.delete('/api/reviews/:id', (req, res) => {
    const id = Number(req.params['id']);
    if (reviews[id] === undefined) {
        res.status(404);
        res.end();
        return;
    }

    reviews.splice(id, 1);
    
    res.status(204);
    res.end();
});

app.listen(3080, () => {
    console.info('app is running');
});
