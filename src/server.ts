import express from 'express';
import { charactersRouter } from './routes/character';
import cors from 'cors';
import { DBinit } from './models/DBinit';

const PORT = 5000;
const app = express();

DBinit();

app.use(cors());
app.use(charactersRouter);

app.listen(PORT, () => {
  console.clear();
  console.log(`the server is running on http://localhost:${PORT}`);
})
