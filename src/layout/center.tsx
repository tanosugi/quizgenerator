import { FC, ReactNode } from 'react';

import { Flex, View } from '@aws-amplify/ui-react';

const Center: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="flex-start"
      wrap="nowrap"
      gap="1rem"
    >
      <View>{children}</View>
    </Flex>
  );
};

export default Center;
