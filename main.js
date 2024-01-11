// import axios from "axios";

console.log('hello world');

const recentReviewsList = document.querySelector('#recent-reviews-list');
const newReviewForm = document.querySelector('#new-review-form');

// recentReviewsList.textContent = 'this is the section!';

axios.get('http://127.0.0.1:3080/api/reviews')
    .then(response => {
        const reviews = response.data;
        // {
        //     "name": "Michael",
        //     "game": "Tears of the Kingdom",
        //     "rating": 8,
        //     "commment": "It was pretty good!"
        // },
        // recentReviewsList.textContent = response.data[0].game;
        // console.log(response.data);

        for (const review of reviews) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <h3>${review.game}</h3>
            <p>${review.name} -- ${review.rating}</p>
            <br>
            <p><em>${review.comment}</em></p>`;
            recentReviewsList.appendChild(listItem);
        }
    });

newReviewForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const nameField = document.querySelector('#name-field');
    const gameField = document.querySelector('#game-field');
    const ratingField = document.querySelector('#rating-field');
    const commentField = document.querySelector('#comment-field');

    const nameValue = nameField.value;
    const game = gameField.value;
    const rating = ratingField.value;
    const comment = commentField.value;

    const data = { 
        name: nameValue, 
        game: game, 
        rating: rating, 
        comment: comment 
    };

    axios.post('http://127.0.0.1:3080/api/reviews', data)
        .then(response => {
            console.log(response);
        });
});
