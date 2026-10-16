import { useState } from 'react';
import { X } from 'lucide-react';

interface RecentTransactionsItems {
    name: string;
    type: string;
    category: string;
    amount: number;
    date: string;
}

interface RecentTransactionsProps {
    transactions: RecentTransactionsItems[];
}

const groupTransactionsByDate = (transactions: RecentTransactionsItems[]) => {
    const grouped = transactions.reduce((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(transaction);
        return acc;
    }, {} as Record<string, RecentTransactionsItems[]>);

    return Object.keys(grouped)
        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
        .map((date) => ({
            date: date,
            transactions: grouped[date]
        }));
}

export const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
    const [isTransactionsOpened, setIsTransactionsOpened] = useState(false);

    const groupedTransactions = groupTransactionsByDate(transactions);

    const renderTransaction = (transaction: RecentTransactionsItems, index: number) => (
        <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center" key={index}>
            <div>
                <div className="w-12 h-12 bg-black rounded-full"></div>
            </div>
            <div>
                <h1 className="">{transaction.name}</h1>
                <h2 className="text-sm text-[#5b5b5b]">{transaction.category}</h2>
            </div>
            <h5 className={`${transaction.type === "income" ? "text-[#158900]" : "text-[#d40000]"}`}>
                {transaction.type === "income" ? "+$" : "-$"}{transaction.amount}
            </h5>
        </div>
    );

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between">
                    <h2>Recent Transactions</h2>
                    <button onClick={() => setIsTransactionsOpened(true)} className="text-[#5b5b5b]">
                        See all
                    </button>
                </div>
                <div className="flex flex-col gap-3 pb-4">
                    {transactions.slice(-3).map((t, i) => renderTransaction(t, i))}
                </div>
            </div>

            <div className={`fixed inset-0 z-50 bg-[#d6d6d6] transition-transform duration-500 ease-in-out ${isTransactionsOpened ? "translate-y-0" : "translate-y-full"}`}>
                <div className="w-full max-w-[320px] mx-auto h-full flex flex-col pt-8 px-4">
                    <div className="grid grid-cols-[1fr_auto_1fr] mb-6">
                        <button onClick={() => setIsTransactionsOpened(false)} className="text-[#5b5b5b] font-medium">
                            <X />
                        </button>
                        <h2 className="text-2xl ">Transactions History</h2>
                    </div>
                    <div className="flex flex-col pb-8 overflow-y-auto hide-scrollbar">
                        
                        {groupedTransactions.map((group) => {
                            const formattedDate = new Date(group.date).toLocaleDateString('en-US', {
                                month: 'short', day: 'numeric', year: 'numeric'
                            });

                            return (
                                <div key={group.date} className="mb-6">
                                    <h3 className="text-sm font-medium text-[#5b5b5b] mb-4 border-b border-[#c0c0c0] pb-1">
                                        {formattedDate}
                                    </h3>
                                    
                                    <div className="flex flex-col gap-4">
                                        {group.transactions.map((t, index) => renderTransaction(t, index))}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
            
        </>
    );
}