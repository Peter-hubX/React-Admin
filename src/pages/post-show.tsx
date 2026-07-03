import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";

const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* Existing Fields */}
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <TextField source="body" />

      <hr style={{ width: "100%", margin: "20px 0", opacity: 0.2 }} />

      <BooleanField source="isPublished" label="Is Published?" />

      <DateField source="createdAt" label="Created On" />
      <DateField source="publishedAt" label="Published At" showTime />

      <ArrayField source="links" label="External Resources">
        <Datagrid bulkActionButtons={false}>
          <TextField source="label" label="Link Name" />
          <UrlField source="url" label="URL Target" target="_blank" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

export default PostShow;
