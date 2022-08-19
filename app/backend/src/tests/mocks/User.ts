import { IUser } from "../../database/models/interfaces";
import { hashSync } from "bcryptjs";
export const userMock: IUser = {
  id: 1,
  username: "teste",
  password: hashSync("teste123"),
  email: "testemail@gmail.com",
  role: "cool"
}