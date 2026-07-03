import { Show, SimpleShowLayout, TextField } from "react-admin";

const UsersShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);

export default UsersShow;
