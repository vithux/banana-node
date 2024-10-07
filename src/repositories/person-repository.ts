import pool from "../utils/db";
import dataDictionary from "../utils/dataDictionary";
import queryBuilder from "../utils/queryBuilder"

const createPerson = async (name: string, email: string) => {
  const sqlQuery =
    "INSERT INTO USERS (username, email)" +
    "VALUES ($1, $2) RETURNING *"

  const result = await pool.query(sqlQuery, [name, email])

  return result.rows[0];
}

const findPerson = async (id: string, params: { [key: string]: any }) => {
  const sqlQuery =
    "SELECT             " +
    "  id,              " +
    "  username,        " +
    "  email            " +
    "FROM users         " +
    "WHERE 1=1          " +
    "  /*WHERE_PARAMS*/ "

  const newSqlQuery = queryBuilder.generateWhereParams(sqlQuery, params)
  console.log(newSqlQuery)

  const result = await pool.query(newSqlQuery);

  return dataDictionary.renameData(result.rows)
}



export default { findPerson, createPerson }