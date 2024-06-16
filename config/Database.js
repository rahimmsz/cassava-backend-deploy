import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const db = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // For self-signed certificates
    },
  },
});

(async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

export default db;
