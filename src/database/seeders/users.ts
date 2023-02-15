import { UserAttributes } from "../models/user";
import { v4 as uuidv4 } from "uuid";

export const users: UserAttributes[] = [
  {
    id: uuidv4(),
    name: "Ilavarasu",
    email: "ila@gmail.com",
    password: "asdfasdf",
  },
  {
    id: uuidv4(),
    name: "Chandran",
    email: "chand@gmail.com",
    password: "2342342",
  },
];
