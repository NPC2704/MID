"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    static associate(models) {
      // Work.belongsTo(models.Title, {
      //   foreignKey: "id_title",
      //   targetKey: "code",
      //   as: "id_Title",
      // });
    }
  }
  Work.init(
    {
      work: DataTypes.STRING,
      comment: DataTypes.STRING,
      id_title: DataTypes.STRING,
      status: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Work",
    }
  );
  return Work;
};
