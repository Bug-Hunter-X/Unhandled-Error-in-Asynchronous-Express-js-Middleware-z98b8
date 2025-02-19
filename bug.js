const express = require('express');
const app = express();
app.get('/', (req, res) => {
  //Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a successful response
      res.send('Success!');
    } else {
      // Simulate an error
      throw new Error('Something went wrong!');
    }
  }, 1000);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});