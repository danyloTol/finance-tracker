import { Header } from "../components/Header";
import { ArrowLeftRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { DebitCard } from "../components/DebitCard";
import { DashboardButton } from "../components/DashboardButton";
import { RecentTransactionCard } from "../components/RecentTransactionCard";

export default function Dashboard() {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-5 max-w-[320px] mx-auto mt-4">
                <Header />
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg">Your wallet</h1>
                    <DebitCard />
                </div>
                <div className="flex justify-between w-full text-[#ffffff]">
                    <DashboardButton>
                        <ArrowLeftRight />
                    </DashboardButton>
                    <DashboardButton>
                        <ArrowUpRight />
                    </DashboardButton>
                    <DashboardButton>
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
                    <div className="flex flex-col gap-3">
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                    </div>
                </div>
            </div>
        </div>
    );
}