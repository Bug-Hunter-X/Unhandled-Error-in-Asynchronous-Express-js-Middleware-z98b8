const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    //Simulate an asynchronous operation that might fail
    await new Promise(resolve => setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve('Success!');
      } else {
        resolve(Promise.reject(new Error('Something went wrong!')));
      }
    }, 1000));
    res.send('Success!');
  } catch (error) {
    console.error(error.stack);
    res.status(500).send('Internal Server Error');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});