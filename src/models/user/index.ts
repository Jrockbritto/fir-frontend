type UserData = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

type User = {
  isLoggedIn: boolean;
  userData: UserData;
  token: string;
};

export { User, UserData };
