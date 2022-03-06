import { Box, Flex, Text, Button, IconButton, Input, Divider } from '@chakra-ui/react';
import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function SidebarCart() {
  const navigate = useNavigate();
  return (
    <Box bg='#ECEDF3' width='30%' height='768px'>
      <Flex pt='30px' justify='center' alignItems='center'>
        <IconButton
          color='#FFFFFF'
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
          color='#FFFFFF'
          mt='5px'
          mb='5px'
          bg='#6356A5'
          borderRadius='12px'
        >
          Sign In
        </Button>
      </Flex>
      <Flex direction='column' pt='120px' pl='64px' pr='63px'>
        <Text pb='40px' fontSize='3xl'>
          Resume
        </Text>
        <Input variant='outline' placeholder='Discount coupon' />
        <Flex justify='space-between'>
          <Text pt='30px' fontSize='sm'>
            Subtotal
          </Text>
          <Text pt='30px' fontSize='sm'>
            R$ 29,80
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text pt='15px' fontSize='sm'>
            Discount
          </Text>
          <Text pt='15px' pb='40px' fontSize='sm'>
            R$ 2,98
          </Text>
        </Flex>
        <Divider color='#292C35' />
        <Flex justify='space-between'>
          <Text pt='15px' fontSize='sm'>
            Total
          </Text>
          <Text pt='15px' pb='40px' fontSize='md'>
            R$ 26,82
          </Text>
        </Flex>
        <Button color='#FEC92E' mt='5px' mb='5px' bg='#292C35' borderRadius='20px'>
          CHECKOUT
        </Button>
        <Button variant='outline' colorScheme='BLACK' color='#292C35' mt='5px' mb='5px' bg='#292C3500' borderRadius='20px'>
          KEEP BUYING
        </Button>
      </Flex>
    </Box>
  );
}
