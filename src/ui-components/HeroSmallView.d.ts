/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroSmallViewOverridesProps = {
    HeroSmallView?: PrimitiveOverrideProps<FlexProps>;
    "Quiz Generator"?: PrimitiveOverrideProps<TextProps>;
    "Simple Quiz Platform where AI Creates Quizzes"?: PrimitiveOverrideProps<TextProps>;
    "Set the subject and level and the AI will create the quiz for you. When you answer, the correct or incorrect answer and an explanation will be displayed. You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroSmallViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroSmallViewOverridesProps | undefined | null;
}>;
export default function HeroSmallView(props: HeroSmallViewProps): React.ReactElement;
