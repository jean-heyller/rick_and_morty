const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type:DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey:true,
      },
      name:{
         type:DataTypes.STRING,
         unique:true,
         allownull:false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive",
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
      },
   }, { timestamps: false });
};
