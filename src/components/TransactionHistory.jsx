const TransactionHistory = ({ id, type, amount, currency }) => {
return (<table className="transaction-history">
<thead>
  <tr>
    <th>{type}</th>
    <th>{amount}</th>
    <th>{currency}</th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
</tbody>
</table>)
}

export default TransactionHistory;