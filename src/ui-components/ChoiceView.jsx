/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ChoiceView(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "bullet-point": {},
        Vector38491059: {},
        incorrect: {},
        Vector38491056: {},
        correct: {},
        "Group 1": {},
        "choice-text": {},
        "Frame 2": {},
        "Frame 1": {},
        ChoiceView: {},
      },
      variantValues: { status: "a" },
    },
    {
      overrides: {
        "bullet-point": { color: "rgba(0,0,0,0)" },
        Vector38491059: {},
        incorrect: {},
        Vector38491056: {
          paths: [
            {
              d: "M6.21 15.54L0 9.33L2.83 6.5L6.21 9.89L16.09 0L18.92 2.83L6.21 15.54Z",
              fill: "rgba(67,168,84,1)",
              fillRule: "nonzero",
            },
          ],
        },
        correct: {},
        "Group 1": {},
        "choice-text": {},
        "Frame 2": {},
        "Frame 1": {},
        ChoiceView: {
          border: "3px SOLID rgba(67,168,84,1)",
          padding: "7px 7px 7px 7px",
        },
      },
      variantValues: { status: "correct" },
    },
    {
      overrides: {
        "bullet-point": { color: "rgba(0,0,0,0)" },
        Vector38491059: {
          paths: [
            {
              d: "M16 0L2 0C1.46957 4.44089e-16 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 4.44089e-16 1.46957 0 2L0 16C4.44089e-16 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18L16 18C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16L18 2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 4.44089e-16 16 0ZM16 16L2 16L2 2L16 2L16 16ZM14 5.4L10.4 9L14 12.6L12.6 14L9 10.4L5.4 14L4 12.6L7.6 9L4 5.4L5.4 4L9 7.6L12.6 4L14 5.4Z",
              fill: "rgba(149,4,4,1)",
              fillRule: "nonzero",
            },
          ],
        },
        incorrect: {},
        Vector38491056: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 18.91998291015625,
            height: 15.53997802734375,
          },
        },
        correct: {},
        "Group 1": {},
        "choice-text": {},
        "Frame 2": {},
        "Frame 1": {},
        ChoiceView: {
          border: "3px SOLID rgba(149,4,4,1)",
          padding: "7px 7px 7px 7px",
        },
      },
      variantValues: { status: "incorrect" },
    },
    {
      overrides: {
        "bullet-point": { children: "b" },
        Vector38491059: {},
        incorrect: {},
        Vector38491056: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 18.91998291015625,
            height: 15.53997802734375,
          },
        },
        correct: {},
        "Group 1": {},
        "choice-text": {},
        "Frame 2": {},
        "Frame 1": {},
        ChoiceView: {},
      },
      variantValues: { status: "b" },
    },
    {
      overrides: {
        "bullet-point": { children: "c" },
        Vector38491059: {},
        incorrect: {},
        Vector38491056: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 18.9200439453125,
            height: 15.53997802734375,
          },
        },
        correct: {},
        "Group 1": {},
        "choice-text": {},
        "Frame 2": {},
        "Frame 1": {},
        ChoiceView: {},
      },
      variantValues: { status: "c" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(48,64,80,1)"
      borderRadius="10px"
      padding="9px 9px 9px 9px"
      display="flex"
      {...getOverrideProps(overrides, "ChoiceView")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="24px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 1")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="22px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="1px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="a"
            {...getOverrideProps(overrides, "bullet-point")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="3px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "incorrect")}
          >
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="12.5%"
              right="12.5%"
              {...getOverrideProps(overrides, "Vector38491059")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="3px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "correct")}
          >
            <Icon
              width="18.92px"
              height="15.54px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.920013427734375,
                height: 15.53997802734375,
              }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.33%"
              bottom="14.92%"
              left="11.62%"
              right="9.54%"
              {...getOverrideProps(overrides, "Vector38491056")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 2")}
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
            width="200px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lorem ipsum dolor sit amet consectetur. Ullamcorper "
            {...getOverrideProps(overrides, "choice-text")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
