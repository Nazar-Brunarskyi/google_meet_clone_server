import { Sequelize } from "sequelize-typescript";
import { CharacterModel } from "../models/characters/characterModel";

export const getCharacters = async (amount: number) => {
  return CharacterModel.findAll({
    limit: amount,
    order: Sequelize.literal('random()')
  });
}

export const getCharacter = async () => {
  const characters = await getCharacters(1);

  return characters[0];
}