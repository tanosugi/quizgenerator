/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { QuizSet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizSetViewOverridesProps = {
    QuizSetView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    problem3851301?: PrimitiveOverrideProps<TextProps>;
    problem3851310?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QuizSetViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    quizSet?: QuizSet;
} & {
    overrides?: QuizSetViewOverridesProps | undefined | null;
}>;
export default function QuizSetView(props: QuizSetViewProps): React.ReactElement;
