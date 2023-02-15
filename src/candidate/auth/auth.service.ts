import { UserAttributes } from "../../database/models/user";
import * as userRepo from "../../database/repositories/user";

export const getAllUsers = async (): Promise<any[]> => {
  return await userRepo.fromUserRepoGetAllUsers();
};

export const getUsersByName = async (name: string): Promise<any[]> => {
  return await userRepo.fromUserRepoGetUsersByName(name);
};

export const getUsersByField = async (): Promise<any[]> => {
  const data = { field: "email", value: "chandran" };
  return await userRepo.getUsersByField(data);
};

export const getUsersByNameList = async (
  nameList: string[]
): Promise<any[]> => {
  return await userRepo.getUsersByAnyGivenNames(nameList);
};
