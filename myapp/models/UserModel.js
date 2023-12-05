import { DataTypes } from 'sequelize';
import sequelize from '@/config/database';

const User = sequelize.define(
    "user", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
           
          },
          age: {
            type: DataTypes.INTEGER,
           
          },
          city: {
            type: DataTypes.STRING ,
           
          }
    },
    {
      tableName: 'user', 
      timestamps: false, 
  }
)
export default User;