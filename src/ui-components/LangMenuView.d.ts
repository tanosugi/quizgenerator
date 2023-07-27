/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LangMenuViewOverridesProps = {
    LangMenuView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 332"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 330"?: PrimitiveOverrideProps<FlexProps>;
    "close-circle"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    English?: PrimitiveOverrideProps<TextProps>;
    Japanese?: PrimitiveOverrideProps<TextProps>;
    Chinese?: PrimitiveOverrideProps<TextProps>;
    Spanish?: PrimitiveOverrideProps<TextProps>;
    Portuguese?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LangMenuViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LangMenuViewOverridesProps | undefined | null;
}>;
export default function LangMenuView(props: LangMenuViewProps): React.ReactElement;
