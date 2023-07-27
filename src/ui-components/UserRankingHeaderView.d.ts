/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRankingHeaderViewOverridesProps = {
    UserRankingHeaderView?: PrimitiveOverrideProps<FlexProps>;
    "User Ranking"?: PrimitiveOverrideProps<TextProps>;
    "Frame 12"?: PrimitiveOverrideProps<FlexProps>;
    "user name"?: PrimitiveOverrideProps<TextProps>;
    "answered questions"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserRankingHeaderViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UserRankingHeaderViewOverridesProps | undefined | null;
}>;
export default function UserRankingHeaderView(props: UserRankingHeaderViewProps): React.ReactElement;
