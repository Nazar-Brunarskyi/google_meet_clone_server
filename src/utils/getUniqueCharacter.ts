import { getRandomCharacter } from '../services/character';
import { Character } from '../types/character';
import _ from 'lodash';

export async function getUniqueCharacter(
  characters: (Character | null)[]
): Promise<Character> {
  const randomCharacter = await getRandomCharacter();

  if (
    characters.some(character => _.isEqual(character, randomCharacter))
  ) {
    return getUniqueCharacter(characters);
  }

  return randomCharacter;
}