/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { QuizSet } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateQuizSetFormInputValues = {
    subject?: string;
    level?: string;
    numberOfQuiz?: number;
    numberOfAttempt?: number;
    lng?: string;
};
export declare type UpdateQuizSetFormValidationValues = {
    subject?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    numberOfQuiz?: ValidationFunction<number>;
    numberOfAttempt?: ValidationFunction<number>;
    lng?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateQuizSetFormOverridesProps = {
    UpdateQuizSetFormGrid?: PrimitiveOverrideProps<GridProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfQuiz?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfAttempt?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateQuizSetFormProps = React.PropsWithChildren<{
    overrides?: UpdateQuizSetFormOverridesProps | undefined | null;
} & {
    id?: string;
    quizSet?: QuizSet;
    onSubmit?: (fields: UpdateQuizSetFormInputValues) => UpdateQuizSetFormInputValues;
    onSuccess?: (fields: UpdateQuizSetFormInputValues) => void;
    onError?: (fields: UpdateQuizSetFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateQuizSetFormInputValues) => UpdateQuizSetFormInputValues;
    onValidate?: UpdateQuizSetFormValidationValues;
} & React.CSSProperties>;
export default function UpdateQuizSetForm(props: UpdateQuizSetFormProps): React.ReactElement;
