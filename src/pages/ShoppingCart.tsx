/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
import { Box, Flex, Divider, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { SidebarCart } from '../components/SidebarCart';
import { TransactionTable } from '../components/TransactionsTable';

export function ShoppingCart() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);
  return (
    <Flex pl='150px'>
      <Flex>
        <Flex pr='5%' direction='column'>
          <Flex>
            <Text pt='15px' fontSize='4xl'>
              tog.design
            </Text>
          </Flex>
          <Box w='900px'>
            <Text textAlign='center' fontSize='3xl' pt='130px' pb='40px'>
              Your Cart
            </Text>
          </Box>
          <TransactionTable />
          <Divider />
        </Flex>
      </Flex>
      <SidebarCart />
    </Flex>
  );
}
