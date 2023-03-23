import axios from "axios";
import { normaliseName } from "./normaliseName";

export async function getPhoto(name: string) {
  const normalizedName = normaliseName(name);

  try {
    const response = await axios
      .get(`https://rickandmortyapi.com/api/character/?name=${normalizedName}`);

    return response.data.results[0].image;
  } catch (err) {

    return null;
  }
}