import { setUsers, setUser } from "../actions";
import { User } from "../models";
import users from "./users.reducer";

const user1 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const user2 = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
};

const user2updated = {
  id: 2,
  name: "Ervin Howell",
  username: "coucou",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "hey.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
};

const userList = [user1, user2];

const userListUpdated = [user1, user2updated];

const initialState: User[] = [];
const initialState2: User[] = userList;

const action = setUsers(userList);
const action2 = setUser(user2updated);
const wrongAction = {
  type: "test",
  payload: userList,
};

test("setUsers should fill store", () => {
  expect(users(initialState, action)).toMatchObject(userList);
});

test("setUser should replace user", () => {
  expect(users(initialState2, action2)).toMatchObject(userListUpdated);
});

test("wrong action should do nothing", () => {
  expect(users(initialState, wrongAction)).toMatchObject([]);
});
