import app from "./app";
import { sequelize } from "./database/connection";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    await sequelize.sync({ force: false });
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server in port ${PORT}`);
    });
  } catch (error) {
    console.error("Error de Connection", error);
  }
}

main();
