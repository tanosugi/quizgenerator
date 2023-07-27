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
export declare type CreateQuizSetWithoutSaveFormInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type CreateQuizSetWithoutSaveFormValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateQuizSetWithoutSaveFormOverridesProps = {
    CreateQuizSetWithoutSaveFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateQuizSetWithoutSaveFormProps = React.PropsWithChildren<{
    overrides?: CreateQuizSetWithoutSaveFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreateQuizSetWithoutSaveFormInputValues) => void;
    onChange?: (fields: CreateQuizSetWithoutSaveFormInputValues) => CreateQuizSetWithoutSaveFormInputValues;
    onValidate?: CreateQuizSetWithoutSaveFormValidationValues;
} & React.CSSProperties>;
export default function CreateQuizSetWithoutSaveForm(props: CreateQuizSetWithoutSaveFormProps): React.ReactElement;
