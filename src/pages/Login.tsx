/* eslint-disable react/react-in-jsx-scope */
import { Text, Flex, Input, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  return (
    <Flex justify='center' direction='column' align='center'>
      <Box>
        <Flex pt='64px' justify='center'>
          <Text fontSize='5xl'>tog.desing</Text>
        </Flex>
        <Text fontSize='3xl' pt='80px' pb='80px'>
          Sign in
        </Text>
        <Flex h='120px' w='400px' justify='space-between' direction='column' align='center'>
          <Input variant='outline' placeholder='E-mail' />
          <Input variant='outline' placeholder='Password' />
        </Flex>
        <Flex justify='end'>
          <Text pt='15px'>Forgot your password?</Text>
        </Flex>
        <Flex pt='64px' justify='center'>
          <Box
            w='230px'
            h='40px'
            as='button'
            onClick={() => {
              navigate('/login');
            }}
            color='#FFFFFF'
            mt='5px'
            mb='5px'
            bg='#6356A5'
            borderRadius='20px'
          >
            Sign In
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
