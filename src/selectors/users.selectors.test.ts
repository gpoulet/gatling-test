import {} from "./posts.selectors"
import {Post} from "../models";
import {
    getNumberOfUserLivingInAnApt,
    getnumberOfUserLivingInASuite,
    getUserById,
    getUsers,
    getUsersSuites
} from "./users.selectors";

const user1 = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

const user2 = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
};
const user3 = {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
};

const suites = ["Apt. 556", "Suite 879", "Suite 847"];

const users = [user1, user2, user3]
const posts: Post[] = []

let state = {posts, users};

test('getUsers should return users', () => {
    expect(getUsers(state)).toBe(users);
});

test('getUserById(2) should return user #2', () => {
    expect(getUserById(state, 2)).toMatchObject(user2);
});

test('getUsersSuites() should return list of suites', () => {
    expect(getUsersSuites(state)).toMatchObject(suites);
});

test('getNumberOfUserLivingInAnApt() should return 1', () => {
    expect(getNumberOfUserLivingInAnApt(state)).toBe(1);
});

test('getnumberOfUserLivingInASuite() should return 2', () => {
    expect(getnumberOfUserLivingInASuite(state)).toBe(2);
});