/* eslint-disable react/no-unescaped-entities */
import { DeleteIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import React from 'react';

export function TransactionTable() {
  return (
    <Table variant='unstyled'>
      <Thead>
        <Tr>
          <Th>Article</Th>
          <Th>Author</Th>
          <Th isNumeric>Value</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            What´s the trend in 2020 <br /> and you didn't use
          </Td>
          <Td>Daniel Alves</Td>
          <Td isNumeric>10.90</Td>
          <Td>
            <IconButton bg='#F5F6F9' aria-label='Delete' icon={<DeleteIcon />} />
          </Td>
        </Tr>
        <Tr>
          <Td>
            Where can you apply desgn <br /> in your life
          </Td>
          <Td>Daniel Alves</Td>
          <Td isNumeric>18.90</Td>
          <Td>
            <IconButton bg='#F5F6F9' aria-label='Delete' icon={<DeleteIcon />} />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
