interface RecentTransactionsItems {
    name: string;
    type: string;
    category: string;
    amount: number;
}

interface RecentTransactionsProps {
    transactions: RecentTransactionsItems[];
}

export const RecentTransactions = ({transactions}: RecentTransactionsProps) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between">
                <h2>Recent Transactions</h2>
                <button className="text-[#5b5b5b]">
                    See all
                </button>
            </div>
            <div className="flex flex-col gap-3 pb-4">
                {transactions.slice(-3).map((transaction, index) => (
                    <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center" key={index}>
                        <div>
                            <div className="w-12 h-12 bg-black rounded-full">
                            </div>
                        </div>
                        <div>
                            <h1 className="">{transaction.name}</h1>
                            <h2 className="text-sm text-[#5b5b5b]">{transaction.category}</h2>
                        </div>
                        <h5 className={`${(transaction.type === "income") ? "text-[#158900]" : "text-[#d40000]"}`}>{(transaction.type === "income") ? "+$" : "-$"}{transaction.amount}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}