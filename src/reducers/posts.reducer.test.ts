import posts from "./posts.reducer"
import {setPosts} from "../actions";
import {Post} from "../models";
const post1 = {
    userId: 1,
    id: 1,
    title: "titre 1",
    body: "lorem"
};
const post2 = {
    userId: 1,
    id: 2,
    title: "titre 2",
    body: "ipsum"
};
const post3 = {
    userId: 2,
    id: 3,
    title: "titre 3",
    body: "is"
};
const postList = [
    post1,
    post2,
    post3
]


const initialState: Post[] = []

const action = setPosts(postList)

const wrongAction = {
    type: "test",
    payload: postList
}

test('setPosts should fill store', () => {
    expect(posts(initialState, action)).toMatchObject(postList);
});

test('wrong action should do nothing', () => {
    expect(posts(initialState, wrongAction)).toMatchObject(initialState);
});