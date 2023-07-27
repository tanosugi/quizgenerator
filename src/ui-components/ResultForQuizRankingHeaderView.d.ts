/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResultForQuizRankingHeaderViewOverridesProps = {
    ResultForQuizRankingHeaderView?: PrimitiveOverrideProps<FlexProps>;
    "Group 3"?: PrimitiveOverrideProps<FlexProps>;
    "user name"?: PrimitiveOverrideProps<TextProps>;
    rank?: PrimitiveOverrideProps<TextProps>;
    accuracy?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ResultForQuizRankingHeaderViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ResultForQuizRankingHeaderViewOverridesProps | undefined | null;
}>;
export default function ResultForQuizRankingHeaderView(props: ResultForQuizRankingHeaderViewProps): React.ReactElement;
