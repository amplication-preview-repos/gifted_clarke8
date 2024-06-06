import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InquiryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
