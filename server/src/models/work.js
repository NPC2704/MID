"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    static associate(models) {
      Work.belongsTo(models.Title, {
        foreignKey: "id_title",
        targetKey: "id",
        as: "idTitle",
      });
    }
  }
  Work.init(
    {
      work: DataTypes.STRING,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Work",
    }
  );
  return Work;
};
