import { RootState } from "../store";

export const getUsers = (state: RootState) => state.users;

export const getUserById = (state: RootState, id: number) =>
  getUsers(state).find((user) => user.id === id);

export const getUsersSuites = (state: RootState) =>
  getUsers(state).map((user) => user.address.suite);

export const getNumberOfUserLivingInAnApt = (state: RootState) =>
  getUsersSuites(state).filter((suite) => suite.includes("Apt")).length;

export const getnumberOfUserLivingInASuite = (state: RootState) =>
  getUsersSuites(state).filter((suite) => suite.includes("Suite")).length;
