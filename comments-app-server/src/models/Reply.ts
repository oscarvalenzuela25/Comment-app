import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './User';
import { Comment } from './Comment';

export class Reply extends Model {
  declare id: number;
  declare commentId: number;
  declare userId: number;
  declare content: string;
  declare score: number;
  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  static initialize(sequelize: Sequelize) {
    Reply.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        commentId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Comment,
            key: 'id',
          },
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
        tableName: 'Replies',
      }
    );
  }

  static associate() {
    Reply.belongsTo(Comment, { foreignKey: 'commentId' });
    Reply.belongsTo(User, { foreignKey: 'userId' });
  }
}
