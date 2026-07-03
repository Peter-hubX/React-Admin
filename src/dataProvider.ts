import fakeRestProvider from "ra-data-fakerest";
import postsData from "./data/posts.json";
import usersData from "./data/users.json";

// 1. Combine the data into a single object
const localData = {
  posts: postsData,
  users: usersData,
};

// 2. Initialize the FakeRest provider
// The 'true' argument turns on console logging so you can see the "API" calls in your browser dev tools!
export const dataProvider = fakeRestProvider(localData, true);
