import { CharacterModel } from "../models/characters/characterModel";
import { Character } from "../types/character";
import { getPhoto } from "../utils/getPhoto";
import { getUniqueCharacter } from "../utils/getUniqueCharacter";

export const getCharacters = async () => {
  const characters: (Character | null)[] = [];

  for (let i = 0; i < 12; i++) {
    try {
      const randomCharacter = await getUniqueCharacter(characters);

      characters.push(randomCharacter);
    } catch (arr) {
      characters.push(null);
    }
  }

  return characters;
}

export const getRandomCharacter = async (): Promise<Character> => {
  const minIndexOfCharacter = 1;
  const maxIndexOfCharacter = 100;
  const randomIndex = Math.floor(Math.random() * maxIndexOfCharacter) + minIndexOfCharacter;

  try {
    const character = await CharacterModel.findOne({
      where: {
        index: randomIndex,
      },
    });

    if (character) {
      return {
        characterName: character.characterName,
        image: await getPhoto(character.characterName),
      }
    }

    throw new Error('can\'t find a character');
  } catch (err) {
    throw new Error('something went wrong can\'t get a character');
  }
}
