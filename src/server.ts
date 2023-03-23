import express from 'express';
import { usersRouter } from './routes/users';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(cors());
app.use(usersRouter);

app.listen(PORT, () => {
  console.clear();
  console.log(`the server is running on http://localhost:${PORT}`);
})
