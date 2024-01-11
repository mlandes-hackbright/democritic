import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

const reviews = [
    {
        name: "Michael",
        game: "Tears of the Kingdom",
        rating: 8,
        comment: "It was pretty good!"
    },
    {
        name: "Rose",
        game: "Tears of the Kingdom",
        rating: 9,
        comment: "It was awesome!"
    }
];

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
