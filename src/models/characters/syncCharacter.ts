import { DBinit } from "../DBinit"
import { CharacterModel } from "./characterModel";
import charactersData from './charactersData.json'


const syncUsers = async () => {
  DBinit();
  
  await CharacterModel.sync({ force: true })

  await CharacterModel.bulkCreate(charactersData);
}

syncUsers();