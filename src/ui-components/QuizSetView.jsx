/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function QuizSetView(props) {
  const { quizSet, overrides, ...rest } = props;
  return (
    <Flex
      gap="3px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(48,64,80,1)"
      borderRadius="5px"
      padding="2px 4px 2px 4px"
      {...getOverrideProps(overrides, "QuizSetView")}
      {...rest}
    >
      <Flex
        gap="35px"
        direction="row"
        width="246px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        className="custom-btn"
        {...getOverrideProps(overrides, "Frame 10")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="195px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${quizSet?.subject}${" for "}${quizSet?.level}`}
          {...getOverrideProps(overrides, "problem3851301")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={quizSet?.numberOfAttempt}
          {...getOverrideProps(overrides, "problem3851310")}
        ></Text>
      </Flex>
    </Flex>
  );
}
