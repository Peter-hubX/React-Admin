import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { Labeled, useInput } from "react-admin";
import { useFormContext } from "react-hook-form";

interface AmplifyUploaderInputProps {
  source: string;
  label: string;
}

export const AmplifyUploaderInput = ({
  source,
  label,
}: AmplifyUploaderInputProps) => {
  // Access React Admin's underlying form state
  const { setValue } = useFormContext();

  // Register the field with React Admin
  const { field } = useInput({ source });

  return (
    <Labeled label={label} fullWidth>
      <div style={{ marginTop: "8px", marginBottom: "16px" }}>
        <FileUploader
          acceptedFileTypes={["image/*", ".pdf"]}
          path="media/"
          maxFileCount={1}
          isResumable
          // When the upload to S3 finishes, grab the key and save it to the form
          onUploadSuccess={({ key }) => {
            setValue(source, key, { shouldDirty: true, shouldValidate: true });
          }}
          onFileRemove={() => {
            setValue(source, null, { shouldDirty: true });
          }}
        />

        {/* Hidden input ensures React Admin tracks this field for saving */}
        <input type="hidden" {...field} />
      </div>
    </Labeled>
  );
};
