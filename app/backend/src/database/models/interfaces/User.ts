interface IUser {
  id?: number
  username: string
  password: string
  email: string
  role: string
}

interface ILogin {
  email: string
  password: string
}

export {
  ILogin,
  IUser,
};
