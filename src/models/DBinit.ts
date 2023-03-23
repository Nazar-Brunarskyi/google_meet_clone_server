import { Sequelize } from "sequelize-typescript"
import { models } from './index'
const URI = 'postgres://nnazar836:3TiYnUs6LRxC@ep-yellow-bread-897169.eu-central-1.aws.neon.tech/neondb';

export const DBinit = () => {
  return new Sequelize(
    URI,
    {
      models,
      dialectOptions: { ssl: true }
    }
  );
}