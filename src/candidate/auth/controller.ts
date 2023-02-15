import { Request, Response } from "express";
import { ApiSuccess } from "../../errors/base-success";
import {
  getAllUsers,
  getUsersByField,
  getUsersByName,
  getUsersByNameList,
} from "./auth.service";

const handleLogin = (req: Request, res: Response) => {
  res.json({ data: "from controller" });
};

const handleLogout = async (req: Request, res: Response) => {
  // const results = await getUsersByNameList([
  //   "Ilavarasu",
  //   "Ramachandran",
  //   "Chandran",
  // ]);
  const results = await getUsersByField();
  ApiSuccess.success(res, results);
};

export { handleLogin, handleLogout };
