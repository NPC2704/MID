// import user from "./user";
import auth from "./auth";
import work from "./work";
import title from "./title";
import { notFound } from "../middlewares/handleError";
const initRoutes = (app) => {
  // app.use("/api/v1/user", user);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/title", title);
  app.use("/api/v1/work", work);
  app.use(notFound);
};

module.exports = initRoutes;
