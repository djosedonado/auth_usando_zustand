import { Sequelize } from "@sequelize/core";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize("auth", "postgres", "egresado", {
  host: "localhost",
  dialect: "postgres",
});
