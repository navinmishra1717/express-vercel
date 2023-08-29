import express from 'express';

const app = express();

const port = 8888;
app.use('/', (req, res) => {
  res.json({ message: 'Hello from express app!' });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
