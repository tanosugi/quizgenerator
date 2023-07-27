/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizResultViewOverridesProps = {
    QuizResultView?: PrimitiveOverrideProps<FlexProps>;
    problems3851296?: PrimitiveOverrideProps<TextProps>;
    "subject-and-level"?: PrimitiveOverrideProps<TextProps>;
    "correct-answers"?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    "Frame 341"?: PrimitiveOverrideProps<FlexProps>;
    "Generate Another Quiz"?: PrimitiveOverrideProps<ButtonProps>;
    "Try Again"?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    problems3851285?: PrimitiveOverrideProps<TextProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    twitter?: PrimitiveOverrideProps<FlexProps>;
    Vector3851287?: PrimitiveOverrideProps<IconProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "content-copy"?: PrimitiveOverrideProps<ViewProps>;
    Vector3851289?: PrimitiveOverrideProps<IconProps>;
    problems3851291?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QuizResultViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: QuizResultViewOverridesProps | undefined | null;
}>;
export default function QuizResultView(props: QuizResultViewProps): React.ReactElement;
