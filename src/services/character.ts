import { Sequelize } from "sequelize-typescript";
import { CharacterModel } from "../models/characters/characterModel";

export const getCharacters = async (amount: number) => {
  return CharacterModel.findAll({
    limit: amount,
    order: Sequelize.literal('random()')
  });
}