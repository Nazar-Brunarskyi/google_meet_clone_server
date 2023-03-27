import { Request, Response } from "express"
import * as charactersServices from '../services/character';

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const data = await charactersServices.getCharacters(12);

    res.send(data)
  } catch (err) {
    res.sendStatus(500);
  }
}

export const getRandomCharacter = async (req: Request, res: Response) => {
  try {
    const data = await charactersServices.getCharacter();

    res.send(data)
  } catch (err) {
    res.sendStatus(500);
  }
}