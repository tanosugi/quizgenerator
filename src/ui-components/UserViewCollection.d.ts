/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserViewProps } from "./UserView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserViewCollectionOverridesProps = {
    UserViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    UserView?: UserViewProps;
} & EscapeHatchProps;
export declare type UserViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => UserViewProps;
} & {
    overrides?: UserViewCollectionOverridesProps | undefined | null;
}>;
export default function UserViewCollection(props: UserViewCollectionProps): React.ReactElement;
