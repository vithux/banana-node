import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config()

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: parseInt(process.env.POSTGRES_PORT || ''),
  idleTimeoutMillis: 30000,
});

export default pool;