import { Header } from "../components/Header";
import { ArrowLeftRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { DashboardButton } from "../components/DashboardButton";
import { RecentTransactionCard } from "../components/RecentTransactionCard";
import { DebitCardsCarousel } from "../components/DebitCardsCarousel";

const accounts = [
    { type: 'debit card', name: '9932', balance: 3245.32 },
    { type: 'debit card', name: '2356', balance: 1434.32 },
    { type: 'debit card', name: '2342', balance: 1556.43 }
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
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <h2>Recent Transactions</h2>
                        <button className="text-[#5b5b5b]">
                            See all
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 pb-4">
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                    </div>
                </div>
            </div>
        </div>
    );
}