const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      email:{
         type: DataTypes.STRING,
         unique: true,
         allownull:false,
      },
      password:{
         type:DataTypes.STRING,
         unique:true,
         allownull:false,
      },
   }, { timestamps: false });
};
