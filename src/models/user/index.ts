export type UserData = {
  id: string;
	name: string;
	lastName: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
}

export type User = {
  isLoggedIn: boolean;
  userData: UserData;
  token: string;
};
