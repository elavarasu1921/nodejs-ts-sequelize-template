import { Op, QueryTypes } from "sequelize";
import db from "../models";

// const getAllUsers = async () => {
//   return await db.User.findAll();
// };

const getAllUsers = async () => {
  let query = `SELECT * FROM users`;
  const users = await db.sequelize.query(query, { type: QueryTypes.SELECT });
  return users;
};

const getUsersByName = async (name: string) => {
  let query = `SELECT * FROM users WHERE name = ?`;
  const users = await db.sequelize.query(query, {
    replacements: [name],
    type: QueryTypes.SELECT,
  });
  return users;
};

const createUser = async () => {
  const user = await db.User.create({ firstName: "Jane", lastName: "Doe" });
  return user;
};

const getUsersByField = async ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  return await db.User.findAll({
    where: { [field]: value },
  });
};

const getUsersByAnyGivenNames = async (nameList: string[]) => {
  let query = `SELECT * FROM users WHERE name IN(:nameList)`;
  const users = await db.sequelize.query(query, {
    replacements: { nameList },
    type: QueryTypes.SELECT,
  });
  return users;
};

export {
  getAllUsers as fromUserRepoGetAllUsers,
  getUsersByName as fromUserRepoGetUsersByName,
  getUsersByAnyGivenNames,
  getUsersByField,
};
