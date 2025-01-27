import { DataTypes, Model, Sequelize } from 'sequelize';
import { Comment } from './Comment';

export class User extends Model {
  declare id: number;
  declare username: string;
  declare avatar: string;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }

  static associate() {
    User.hasMany(Comment, { foreignKey: 'userId' });
  }
}
