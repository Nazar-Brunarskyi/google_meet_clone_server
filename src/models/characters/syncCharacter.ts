import { DBinit } from "../DBinit"
import { CharacterModel } from "./characterModel";

const characters = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith", "Abadango Cluster Princess", "Abradolf Lincler", "Adjudicator Rick", "Agency Director", "Alan Rails", "Albert Einstein", "Alexander", "Alien Googah", "Alien Morty", "Alien Rick", "Amish Cyborg", "Annie", "Antenna Morty", "Antenna Rick", "Ants in my Eyes Johnson", "Aqua Morty", "Aqua Rick", "Arcade Alien", "Armagheadon", "Armothy", "Arthricia", "Artist Morty", "Attila Starwar", "Baby Legs", "Baby Poopybutthole", "Baby Wizard", "Bearded Lady", "Beebo", "Benjamin", "Bepisian", "Beta-Seven", "Beth Sanchez", "Beth Smith", "Beth Smith", "Beth's Mytholog", "Big Boobed Waitress", "Big Head Morty", "Big Morty", "Body Guard Morty", "Bill", "Bill", "Birdperson", "Black Rick", "Blamph", "Blim Blam", "Blue Diplomat", "Blue Footprint Guy", "Blue Shirt Morty", "Bobby Moynihan", "Boobloosian", "Bootleg Portal Chemist Rick", "Borpocian", "Brad", "Brad Anderson", "Calypso", "Campaign Manager Morty", "Canklanker Thom", "Centaur", "Chris", "Chris", "Coach Feratu (Balik Alistane)", "Collector", "Colossus", "Commander Rick", "Concerto", "Conroy", "Cool Rick", "Cop Morty", "Cop Rick", "Courier Flap", "Cousin Nicky", "Cowboy Morty", "Cowboy Rick", "Crab Spider", "Creepy Little Girl", "Crocubot", "Cronenberg Rick", "Cronenberg Morty", "Cult Leader Morty", "Cyclops Morty", "Cyclops Rick", "Cynthia", "Cynthia", "Dale", "Daron Jefferson", "David Letterman", "Davin", "Diablo Verde", "Diane Sanchez", "Dipper and Mabel Mortys", "Tuberculosis", "Gonorrhea", "Hepatitis A", "Hepatitis C", "Bubonic Plague"]

const syncUsers = async () => {
  DBinit();
  try {
    await CharacterModel.sync({ force: true })
  } catch (err) {
    return;
  }

  const errors: any = [];

  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];

    try {
      await CharacterModel.create({ characterName: character, index: index + 1 })
    } catch (err) {
      errors.push(err);
    }
  }

  if (errors.length) {
    console.log(errors);
  }
}

syncUsers();