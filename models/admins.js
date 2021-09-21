const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../middleware/db');


const Admin = sequelize.define('user', {
    // Model attributes are defined here
    seller_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING
    },
    Password: {
      type: DataTypes.STRING
    },
    Role: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  console.log(Admin === sequelize.models.Admin);


  // async function findAll(){
  //   const users = await User.findAll();
  //   return users;
  // }

    // async function findAll(){
    //   const users = await User.findAll();
    //   return users;
    // }


  module.exports = Admin;