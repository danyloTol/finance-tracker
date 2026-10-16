import { Header } from "../components/Header";
import { ArrowLeftRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { DashboardButton } from "../components/DashboardButton";
import { DebitCardsCarousel } from "../components/DebitCardsCarousel";
import { RecentTransactions } from "../components/RecentTransactions";

const accounts = [
    { type: 'debit card', name: '9932', balance: 3245.32 },
    { type: 'debit card', name: '2356', balance: 1434.32 },
    { type: 'debit card', name: '2342', balance: 1556.43 },
]

const transactions = [
    {name: 'shop', type: 'expense', category: 'category', amount: 239.12},
    {name: 'shop1', type: 'income', category: 'category1', amount: 239.12},
    {name: 'shop2', type: 'expense', category: 'category2', amount: 239.12},
    {name: 'shop3', type: 'income', category: 'category3', amount: 239.12},
]

export default function Dashboard() {
    return (
        <div className="w-full">
            <div className="min-h-screen flex flex-col justify-between max-w-[320px] mx-auto pt-4">
                <Header />
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg">Your wallet</h1>
                    <DebitCardsCarousel wallet={accounts} />
                </div>
                <div className="flex justify-between w-full text-[#ffffff]">
                    <DashboardButton title="Swap">
                        <ArrowLeftRight />
                    </DashboardButton>
                    <DashboardButton title="Send">
                        <ArrowUpRight />
                    </DashboardButton>
                    <DashboardButton title="Receive">
                        <ArrowDownLeft />
                    </DashboardButton>
                </div>
                <div>
                    <RecentTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    );
}