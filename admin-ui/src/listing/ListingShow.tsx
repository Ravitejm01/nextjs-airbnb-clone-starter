import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LISTING_TITLE_FIELD } from "./ListingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description " source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="ListingCreatedBy"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="LocationData" source="locationData" />
        <TextField label="LocationType" source="locationType" />
        <TextField label="MapData" source="mapData" />
        <TextField label="Photos" source="photos" />
        <TextField label="PlaceAmeneties" source="placeAmeneties" />
        <TextField label="PlaceSpace" source="placeSpace" />
        <TextField label="PlaceType" source="placeType" />
        <TextField label="Price" source="price" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Trip" target="listingId" label="Trips">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Listing"
              source="listing.id"
              reference="Listing"
            >
              <TextField source={LISTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TripInfo" source="tripInfo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Wishlist"
          target="listingId"
          label="Wishlists"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Listing"
              source="listing.id"
              reference="Listing"
            >
              <TextField source={LISTING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
