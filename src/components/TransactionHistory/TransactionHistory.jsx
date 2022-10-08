import { Table, Th, Tr, Td } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => {
          return (
            <Tr>
              <Td>{transaction.type}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
