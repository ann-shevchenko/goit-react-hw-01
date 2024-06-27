import s from "./TransactionHistory.module.css";

function TransactionHistory({items}) {
    return (
        <table className={s.transactions}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            {items.map((transaction) => {
                return <tr  key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>

            })}
            </tbody>
        </table>

    );
}

export default TransactionHistory;