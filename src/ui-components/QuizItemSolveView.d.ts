/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ChoiceViewProps } from "./ChoiceView";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizItemSolveViewOverridesProps = {
    QuizItemSolveView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    problems?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    problem?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 333"?: PrimitiveOverrideProps<FlexProps>;
    "Choice-a"?: ChoiceViewProps;
    "Frame 334"?: PrimitiveOverrideProps<FlexProps>;
    "Choice-b"?: ChoiceViewProps;
    "Frame 335"?: PrimitiveOverrideProps<FlexProps>;
    "Choice-c"?: ChoiceViewProps;
    explanation?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type QuizItemSolveViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: QuizItemSolveViewOverridesProps | undefined | null;
}>;
export default function QuizItemSolveView(props: QuizItemSolveViewProps): React.ReactElement;
