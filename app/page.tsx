import { ArrowDownCircleIcon, ArrowUpCircleIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import MyCard from "@/src/components/MyCard";
import FinancialCard from "@/src/components/FinancialCard";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <MyCard />
        {/* More components soon */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <FinancialCard
          title="Total Income"
          amount="₹ 45,000"
          icon={<ArrowUpCircleIcon className="h-6 w-6 text-brand-green" />}
          iconBg="bg-brand-mint"
          bgColor="bg-brand-mint"
        />
        <FinancialCard
          title="Total Expense"
          amount="₹ 28,500"
          icon={<ArrowDownCircleIcon className="h-6 w-6 text-red-500" />}
          iconBg="bg-brand-peach"
          bgColor="bg-brand-peach"
        />
        <FinancialCard
          title="Total Saving"
          amount="₹ 16,500"
          icon={<BanknotesIcon className="h-6 w-6 text-blue-500" />}
          iconBg="bg-brand-sky"
          bgColor="bg-brand-sky"
        />
      </div>
    </div>
  );
}
