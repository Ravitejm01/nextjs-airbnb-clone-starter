import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"listings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
