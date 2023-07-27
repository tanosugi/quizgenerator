/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChoiceViewOverridesProps = {
    ChoiceView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Group 1"?: PrimitiveOverrideProps<FlexProps>;
    "bullet-point"?: PrimitiveOverrideProps<TextProps>;
    incorrect?: PrimitiveOverrideProps<ViewProps>;
    Vector38491059?: PrimitiveOverrideProps<IconProps>;
    correct?: PrimitiveOverrideProps<ViewProps>;
    Vector38491056?: PrimitiveOverrideProps<IconProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    "choice-text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ChoiceViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    status?: "a" | "b" | "c" | "correct" | "incorrect";
} & {
    overrides?: ChoiceViewOverridesProps | undefined | null;
}>;
export default function ChoiceView(props: ChoiceViewProps): React.ReactElement;
