import pool from "../utils/db";

const createPerson = async (name: string, email: string) => {
  const sqlQuery =
    "INSERT INTO USERS (username, email)" +
    "VALUES ($1, $2) RETURNING *"

  const result = await pool.query(sqlQuery, [name, email])

  return result.rows[0];
}

const findPerson = async (id: string) => {
  const sqlQuery =
    "SELECT id, username, email FROM users " +
    "WHERE id = ($1)"

  const result = await pool.query(sqlQuery, [id]);

  return result.rows;
}

export default {findPerson, createPerson}