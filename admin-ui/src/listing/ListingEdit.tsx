import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description " multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="ListingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="LocationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="PlaceType" source="placeType" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wishlists"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
