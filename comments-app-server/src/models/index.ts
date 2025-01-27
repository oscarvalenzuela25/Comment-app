import { User } from './User';
import { Comment } from './Comment';
import { Reply } from './Reply';
import { sequelize } from '../config/sequelize';

// Inicializar modelos
User.initialize(sequelize);
Comment.initialize(sequelize);
Reply.initialize(sequelize);

// Asociaciones
User.associate();
Comment.associate();
Reply.associate();

export { User, Comment, Reply };
