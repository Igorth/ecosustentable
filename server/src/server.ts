import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return (response.json({'message': 'users'}))
})

app.listen(3333);