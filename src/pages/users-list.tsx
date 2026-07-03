import * as React from "react";
import { Datagrid, List, TextField } from "react-admin";

const UsersList = () => {
  return React.createElement(
    List,
    null,
    React.createElement(
      Datagrid,
      { sx: { "& .RaDatagrid-rowEven": { backgroundColor: "#244d8a" } } },
      React.createElement(TextField, { source: "id" }),
      React.createElement(TextField, { source: "name" }),
      React.createElement(TextField, { source: "username" }),
      React.createElement(TextField, { source: "email" }),
    ),
  );
};

export default UsersList;