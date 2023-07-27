/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavbarView(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="315px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavbarView")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="191px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        className="page-title"
        {...getOverrideProps(overrides, "LogoAndTitle")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(54,94,61,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="167px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Quiz Generator"
          {...getOverrideProps(overrides, "Quiz Generator")}
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
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "help-box")}
        >
          <Icon
            width="18px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            paths={[
              {
                d: "M8 15L10 15L10 13L8 13L8 15ZM9 3C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7L7 7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5C9.53043 5 10.0391 5.21071 10.4142 5.58579C10.7893 5.96086 11 6.46957 11 7C11 9 8 8.75 8 12L10 12C10 9.75 13 9.5 13 7C13 5.93913 12.5786 4.92172 11.8284 4.17157C11.0783 3.42143 10.0609 3 9 3ZM2 0L16 0C16.5304 4.44089e-16 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2L18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18L2 18C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 4.44089e-16 16.5304 0 16L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 4.44089e-16 2 0Z",
                fill: "rgba(54,94,61,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector3879233")}
          ></Icon>
        </View>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 329")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 1px 2px 1px"
          {...getOverrideProps(overrides, "translate")}
        >
          <Icon
            width="22px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 22, height: 20 }}
            paths={[
              {
                d: "M11.87 13.07L9.33 10.56L9.36 10.53C11.1 8.59 12.34 6.36 13.07 4L16 4L16 2L9 2L9 0L7 0L7 2L0 2L0 4L11.17 4C10.5 5.92 9.44 7.75 8 9.35C7.07 8.32 6.3 7.19 5.69 6L3.69 6C4.42 7.63 5.42 9.17 6.67 10.56L1.58 15.58L3 17L8 12L11.11 15.11L11.87 13.07ZM17.5 8L15.5 8L11 20L13 20L14.12 17L18.87 17L20 20L22 20L17.5 8ZM14.88 15L16.5 10.67L18.12 15L14.88 15Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector3879229")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="6px 15px 6px 5px"
          {...getOverrideProps(overrides, "menu")}
        >
          <Icon
            width="18px"
            height="12px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 12 }}
            paths={[
              {
                d: "M0 0L18 0L18 2L0 2L0 0ZM0 5L18 5L18 7L0 7L0 5ZM0 10L18 10L18 12L0 12L0 10Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector3879231")}
          ></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
