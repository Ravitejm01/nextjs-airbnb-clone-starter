import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TripShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Listing" source="listing.id" reference="Listing">
          <TextField source={LISTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TripInfo" source="tripInfo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};