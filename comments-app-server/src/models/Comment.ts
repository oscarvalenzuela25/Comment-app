import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './User';
import { Reply } from './Reply';

export class Comment extends Model {
  declare id: number;
  declare userId: number;
  declare content: string;
  declare score: number;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initialize(sequelize: Sequelize) {
    Comment.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: User,
            key: 'id',
          },
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        score: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
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
        tableName: 'Comments',
      }
    );
  }

  static associate() {
    Comment.belongsTo(User, { foreignKey: 'userId' });
    Comment.hasMany(Reply, { foreignKey: 'commentId' });
  }
}
