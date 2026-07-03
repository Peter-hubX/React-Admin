import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import { Admin, EditGuesser, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import authProvider from "./pages/authinticator";
import { Homepage } from "./pages/homepage";
import PostEdit from "./pages/post-edit";
import PostList from "./pages/post-list";
import PostShow from "./pages/post-show";
import UsersList from "./pages/users-list";
import UsersShow from "./pages/users-show";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={Homepage}
    authProvider={authProvider}
  >
    <Resource
      icon={ArticleIcon}
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
    />
    <Resource
      icon={PersonIcon}
      name="users"
      list={UsersList}
      show={UsersShow}
      edit={EditGuesser}
    />
  </Admin>
);

































// import ArticleIcon from "@mui/icons-material/Article";
// import PersonIcon from "@mui/icons-material/Person";
// // import { Admin, EditGuesser, Resource } from "react-admin";
// import { Layout } from "./Layout";
// // import { dataProvider } from "./dataProvider";
// import authProvider from "./pages/authinticator";
// import { Homepage } from "./pages/homepage";
// import PostEdit from "./pages/post-edit";
// // import PostList from "./pages/post-list";
// import PostShow from "./pages/post-show";
// // import UsersList from "./pages/users-list";
// import UsersShow from "./pages/users-show";

// import { Admin, Resource, EditGuesser } from "react-admin";
// import { dataProvider } from "./dataProvider";
// import PostList from "./pages/post-list";
// import UsersList from "./pages/users-list";

// export const App = () => (
//   <Admin dataProvider={dataProvider}>
//     layout={Layout}
//     dataProvider={dataProvider}
//     dashboard={Homepage}
//     authProvider={authProvider}
//   />
//     <Resource
//       icon={ArticleIcon}
//       name="posts"
//       list={PostList}
//       show={PostShow}
//       edit={PostEdit}
//     />
//     <Resource
//       icon={PersonIcon}
//       name="users"
//       list={UsersList}
//       show={UsersShow}
//       edit={EditGuesser}
//     />
//   </Admin>
// );

// // export const App = () => (
// //   <Admin
// //     layout={Layout}
// //     dataProvider={dataProvider}
// //     dashboard={Homepage}
// //     authProvider={authProvider}
// //   >
// //     <Resource
// //       icon={ArticleIcon}
// //       name="posts"
// //       list={PostList}
// //       show={PostShow}
// //       edit={PostEdit}
// //     />
// //     <Resource
// //       icon={PersonIcon}
// //       name="users"
// //       list={UsersList}
// //       show={UsersShow}
// //       edit={EditGuesser}
// //     />
// //   </Admin>
// // );
