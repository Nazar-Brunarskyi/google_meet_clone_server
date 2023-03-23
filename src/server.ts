import express from "express";

const PORT = 5000;

const app = express();

app.use('/', (req, res) => {
  res.send('Hi dfwfwre');
});

app.listen(PORT, () => {
  console.clear();
  console.log(`the server is running on http://localhost:${PORT}`);
})
