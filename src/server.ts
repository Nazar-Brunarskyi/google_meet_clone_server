import express from 'express';
import { usersRouter } from './routes/users';

const PORT = 5000;

const app = express();

app.use(usersRouter);

app.listen(PORT, () => {
  console.clear();
  console.log(`the server is running on http://localhost:${PORT}`);
})
