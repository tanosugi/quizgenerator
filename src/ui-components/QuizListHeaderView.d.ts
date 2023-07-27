/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizListHeaderViewOverridesProps = {
    QuizListHeaderView?: PrimitiveOverrideProps<FlexProps>;
    "Quiz List & Ranking"?: PrimitiveOverrideProps<TextProps>;
    "Frame 11"?: PrimitiveOverrideProps<FlexProps>;
    "subject and level"?: PrimitiveOverrideProps<TextProps>;
    "ansewered by"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QuizListHeaderViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: QuizListHeaderViewOverridesProps | undefined | null;
}>;
export default function QuizListHeaderView(props: QuizListHeaderViewProps): React.ReactElement;
