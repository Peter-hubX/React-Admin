import {
  ArrayInput,
  BooleanInput,
  DateInput,
  DateTimeInput,
  Edit,
  maxLength,
  minLength,
  ReferenceInput,
  regex,
  required,
  SaveButton,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  Toolbar,
  useNotify,
  useRedirect,
} from "react-admin";
import { AmplifyUploaderInput } from "../components/AmplifyUploaderInput";

const validateFutureDate = (value?: string | null): string | undefined => {
  if (!value) return undefined;
  const selectedDate = new Date(value);
  const now = new Date();

  now.setSeconds(0, 0);
  selectedDate.setSeconds(0, 0);

  return selectedDate < now ? "Date cannot be in the past" : undefined;
};

const ensureHttps = (value?: string): string | undefined => {
  if (!value) return value;
  if ("https://".startsWith(value) || "http://".startsWith(value)) {
    return value;
  }
  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    return `https://${value}`;
  }

  return value;
};

const validateRequired = required("This field is mandatory");
const validateTitle = [
  required("Title is required"),
  minLength(5, "Title must be at least 5 characters long"),
  maxLength(100, "Title cannot exceed 100 characters"),
];

const validateArrayTotal: any = (values: any) => {
  const total =
    values.links?.reduce(
      (sum: number, link: any) => sum + (link?.label?.length || 0),
      0,
    ) || 0;

  if (total > 10) {
    return undefined;
  }

  const errors: any = { links: [] };
  if (Array.isArray(values.links)) {
    values.links.forEach((link: any, index: number) => {
      errors.links[index] = { label: "Total length must be > 10" };
    });
  } else {
    errors.links = "Total length must be > 10";
  }

  return errors;
};

const validateLabel = [minLength(3, "Min 3 chars")];

// --> Added Regex Validator for URL
const validateUrl = regex(
  /^(https?:\/\/)[^\s$.?#].[^\s]*$/i,
  "Must be a valid URL",
);

const validateBody = [
  required("Body content is required"),
  minLength(10, "Please provide a more detailed description (min 10 chars)"),
];

const EditToolbar = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Toolbar>
      <SaveButton
        label="Save Post"
        mutationOptions={{
          onSuccess: () => {
            notify("Post updated successfully", { type: "success" });
            redirect("list", "posts");
          },
          onError: (error: unknown) => {
            const message =
              error instanceof Error ? error.message : String(error);
            notify(`Error: ${message}`, { type: "error" });
          },
        }}
      />
    </Toolbar>
  );
};

export const PostEdit = () => (
  <Edit>
    <SimpleForm toolbar={<EditToolbar />} validate={validateArrayTotal}>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" validate={validateRequired} />
      </ReferenceInput>

      <TextInput source="id" disabled />
      <TextInput source="title" fullWidth validate={validateTitle} />
      <TextInput source="body" multiline fullWidth validate={validateBody} />

      <hr style={{ width: "100%", margin: "20px 0", opacity: 0.2 }} />

      <BooleanInput source="isPublished" label="Publish immediately?" />
      <DateInput source="createdAt" label="Creation Date" />
      <DateTimeInput
        source="publishedAt"
        label="Scheduled Date/Time"
        validate={validateFutureDate}
      />

      <ArrayInput source="links" label="External Links">
        <SimpleFormIterator inline>
          <TextInput source="label" validate={validateLabel} />
          <TextInput
            source="url"
            label="URL (https://...)"
            type="url"
            parse={ensureHttps}
            validate={[validateRequired, validateUrl]}
          />
        </SimpleFormIterator>
      </ArrayInput>
      <AmplifyUploaderInput source="coverImage" label="Cover Image Upload" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
