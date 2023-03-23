import express from 'express';
import * as charactersControllers from '../controllers/character'

export const charactersRouter = express.Router();

charactersRouter.get('/getCharactersForMeeting', charactersControllers.getCharacters)
charactersRouter.get('/getRandomCharacter', charactersControllers.getRandomCharacter)