import { useMemo } from "react";
import {
  ColumnsButton, // <-- Added import
  DataTable,
  List,
  ReferenceField,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";

// Define custom actions to include the column selector button
const ListActions = () => (
  <TopToolbar>
    <ColumnsButton />
  </TopToolbar>
);

const PostList = () => {
  const postsFilter = useMemo(
    () => [
      <TextInput key="search" source="q" label="Search" alwaysOn resettable />,
    ],
    [],
  );

  return (
    <List
      title="Units"
      filters={postsFilter}
      sort={{ field: "name", order: "ASC" }}
      actions={<ListActions />} // <-- Added actions here
    >
      <DataTable rowClick="edit">
        <DataTable.Col source="id" label="ID" />

        <DataTable.Col source="userId" label="Name">
          <ReferenceField source="userId" reference="users" link="show">
            <TextField source="name" />
          </ReferenceField>
        </DataTable.Col>

        <DataTable.Col source="title" label="Title" />
        <DataTable.Col source="body" label="Body" />
      </DataTable>
    </List>
  );
};

export default PostList;
