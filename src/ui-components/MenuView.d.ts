/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuViewOverridesProps = {
    MenuView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 337"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 330"?: PrimitiveOverrideProps<FlexProps>;
    "close-circle"?: PrimitiveOverrideProps<FlexProps>;
    Vector3878243?: PrimitiveOverrideProps<IconProps>;
    "home-button"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    home?: PrimitiveOverrideProps<ViewProps>;
    Vector3878294?: PrimitiveOverrideProps<IconProps>;
    "quiz-generate"?: PrimitiveOverrideProps<FlexProps>;
    "Generate Quiz"?: PrimitiveOverrideProps<TextProps>;
    "pencil-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector3878256?: PrimitiveOverrideProps<IconProps>;
    "quiz-list"?: PrimitiveOverrideProps<FlexProps>;
    "Quiz List"?: PrimitiveOverrideProps<TextProps>;
    "format-list-bulleted-square"?: PrimitiveOverrideProps<ViewProps>;
    Vector3878258?: PrimitiveOverrideProps<IconProps>;
    "user-ranking"?: PrimitiveOverrideProps<FlexProps>;
    "User Ranking"?: PrimitiveOverrideProps<TextProps>;
    seal?: PrimitiveOverrideProps<ViewProps>;
    Vector3878260?: PrimitiveOverrideProps<IconProps>;
    signout?: PrimitiveOverrideProps<FlexProps>;
    "Sign Out"?: PrimitiveOverrideProps<TextProps>;
    logout?: PrimitiveOverrideProps<ViewProps>;
    Vector3878262?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MenuViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuViewOverridesProps | undefined | null;
}>;
export default function MenuView(props: MenuViewProps): React.ReactElement;
