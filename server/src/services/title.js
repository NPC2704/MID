import db from "../models";
import { Op } from "sequelize";
import { v4 as generateId } from "uuid";

export const getTitle = ({ name, ...query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = { raw: true, rest: true };

      if (name) query.title = { [Op.substring]: name };

      // ham tim kiem
      const response = await db.Title.findAll({
        // where: query,
        // ...queries,
        // attributes: {
        //   exclude: ["category_code", "description"],
        // },
        // include: [
        //   {
        //     model: db.Category,
        //     attributes: {
        //       exclude: ["createdAt", "updatedAt"],
        //     },
        //     as: "categoryData",
        //   },
        // ],
      });

      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got" : "Cannot found books",
        bookData: response,
      });
    } catch (error) {
      reject(error);
    }
  });
