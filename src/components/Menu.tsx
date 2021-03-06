import React from 'react';
import { Flex, Image } from 'theme-ui';
import { Close } from '../assets';

interface MenuProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setMenu: Function;
}

const Menu = (props: MenuProps) => {
  const { setMenu } = props;

  return (
    <Flex sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      maxHeight: '100vh',
      backgroundColor: 'white',
      alignItems: 'flex-end',
      justifyContent: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden',
      zIndex: 3,
    }}>
      <Image src={Close} alt="close-button" m={[3, null, 4]} p={[2]} sx={{ position: 'absolute', left: 0, top: 0, cursor: 'pointer' }} onClick={() => setMenu(false)} />
      <Flex>
      </Flex>
    </Flex>
  );
};

export default Menu;
