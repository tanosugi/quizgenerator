/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesViewOverridesProps = {
    FeaturesView?: PrimitiveOverrideProps<FlexProps>;
    Features?: PrimitiveOverrideProps<TextProps>;
    "Frame 338"?: PrimitiveOverrideProps<FlexProps>;
    "Quiz Generation"?: PrimitiveOverrideProps<TextProps>;
    "Set the subject and level and the AI will create the quiz for you."?: PrimitiveOverrideProps<TextProps>;
    Button3976966?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 339"?: PrimitiveOverrideProps<FlexProps>;
    "Quiz Answering Function"?: PrimitiveOverrideProps<TextProps>;
    "You can answer the quiz. When you answer, correct or incorrect answers and explanations will be displayed."?: PrimitiveOverrideProps<TextProps>;
    Button3976990?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 340"?: PrimitiveOverrideProps<FlexProps>;
    "Ranking Function"?: PrimitiveOverrideProps<TextProps>;
    "You can also see the ranking of the percentage of correct answers and the number of quizzes answered by each user."?: PrimitiveOverrideProps<TextProps>;
    Button3976997?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 341"?: PrimitiveOverrideProps<FlexProps>;
    "Multi-Language Support"?: PrimitiveOverrideProps<TextProps>;
    "English, Japanese, Chinese, and Spanish, Portuguese are supported. Not only will the menu be displayed in the selected language, but the quiz, answers, and explanations will also be displayed in that language!"?: PrimitiveOverrideProps<TextProps>;
    Button4007950?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FeaturesViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeaturesViewOverridesProps | undefined | null;
}>;
export default function FeaturesView(props: FeaturesViewProps): React.ReactElement;
