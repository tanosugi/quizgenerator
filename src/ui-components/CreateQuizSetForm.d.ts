/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateQuizSetFormInputValues = {
    subject?: string;
    level?: string;
    numberOfQuiz?: number;
    numberOfAttempt?: number;
    lng?: string;
};
export declare type CreateQuizSetFormValidationValues = {
    subject?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    numberOfQuiz?: ValidationFunction<number>;
    numberOfAttempt?: ValidationFunction<number>;
    lng?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateQuizSetFormOverridesProps = {
    CreateQuizSetFormGrid?: PrimitiveOverrideProps<GridProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfQuiz?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfAttempt?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateQuizSetFormProps = React.PropsWithChildren<{
    overrides?: CreateQuizSetFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateQuizSetFormInputValues) => CreateQuizSetFormInputValues;
    onSuccess?: (fields: CreateQuizSetFormInputValues) => void;
    onError?: (fields: CreateQuizSetFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateQuizSetFormInputValues) => CreateQuizSetFormInputValues;
    onValidate?: CreateQuizSetFormValidationValues;
} & React.CSSProperties>;
export default function CreateQuizSetForm(props: CreateQuizSetFormProps): React.ReactElement;
