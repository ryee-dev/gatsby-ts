import React from 'react';
import { Flex, Text } from 'theme-ui';

const Work = () => {
  return (
    <Flex sx={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <Flex>
        <Text variant="title">work</Text>
      </Flex>
    </Flex>
  );
};

export default Work;
