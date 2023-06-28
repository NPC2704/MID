"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Title extends Model {
    static associate(models) {
      // define association here
    }
  }
  Title.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Title",
    }
  );
  return Title;
};
