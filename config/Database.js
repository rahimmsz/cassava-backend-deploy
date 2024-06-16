import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Membuat instance Sequelize dengan koneksi PostgreSQL
const db = new Sequelize(process.env.POSTGRES_URL, {
  dialectModule: require("pg"),
});

// Menguji koneksi ke database
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

export default db;
