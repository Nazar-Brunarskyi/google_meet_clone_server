import { Sequelize } from "sequelize-typescript";
import { CharacterModel } from "../models/characters/characterModel";

export const getCharacters = async (count: number) => {
  return CharacterModel.findAll({
    limit: count,
    order: Sequelize.literal('random()')
  });
}