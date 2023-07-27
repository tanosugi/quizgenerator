/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserViewOverridesProps = {
    UserView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    problem3851320?: PrimitiveOverrideProps<TextProps>;
    problem3851321?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    user?: User;
} & {
    overrides?: UserViewOverridesProps | undefined | null;
}>;
export default function UserView(props: UserViewProps): React.ReactElement;
