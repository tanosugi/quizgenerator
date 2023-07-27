/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ResultForQuizSetViewProps } from "./ResultForQuizSetView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResultForQuizSetViewCollectionOverridesProps = {
    ResultForQuizSetViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    ResultForQuizSetView?: ResultForQuizSetViewProps;
} & EscapeHatchProps;
export declare type ResultForQuizSetViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ResultForQuizSetViewProps;
} & {
    overrides?: ResultForQuizSetViewCollectionOverridesProps | undefined | null;
}>;
export default function ResultForQuizSetViewCollection(props: ResultForQuizSetViewCollectionProps): React.ReactElement;
