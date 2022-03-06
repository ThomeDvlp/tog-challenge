/* eslint-disable react/react-in-jsx-scope */
import { Text, Flex, Box, IconButton, Button } from '@chakra-ui/react';
import { FaShoppingBag } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <Flex pt='27px' pl='9%' pr='5%' justify='space-between' align='center'>
      <Box>
        <Text fontSize='5xl'>tog.design</Text>
      </Box>

      <Box p={4} color='white'>
        <IconButton
          onClick={() => {
            navigate('/cart');
          }}
          width='48px'
          borderRadius='24px'
          height='48px'
          bg='#A9A7B1'
          mr='30px'
          aria-label='Shoppinf-Cart'
          icon={<FaShoppingBag />}
        />
        <Button
          onClick={() => {
            navigate('/login');
          }}
          mt='5px'
          mb='5px'
          bg='#6356A5'
          borderRadius='12px'
        >
          Sign In
        </Button>
      </Box>
      <Outlet />
    </Flex>
  );
}
