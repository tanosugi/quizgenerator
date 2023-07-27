/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Attempt } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResultForQuizSetViewOverridesProps = {
    ResultForQuizSetView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 9"?: PrimitiveOverrideProps<FlexProps>;
    ranking?: PrimitiveOverrideProps<TextProps>;
    "user-name"?: PrimitiveOverrideProps<TextProps>;
    problems?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ResultForQuizSetViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    attempt?: Attempt;
} & {
    overrides?: ResultForQuizSetViewOverridesProps | undefined | null;
}>;
export default function ResultForQuizSetView(props: ResultForQuizSetViewProps): React.ReactElement;
