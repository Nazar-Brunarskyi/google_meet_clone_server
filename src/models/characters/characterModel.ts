import {
  Table,
  Model,
  Column,
  AutoIncrement,
  AllowNull,
  PrimaryKey
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'Users',
  createdAt: false,
  updatedAt: false,
})

export class CharacterModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  characterName: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  index: string;
}