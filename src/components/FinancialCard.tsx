type Props = {
  title: string;
  amount: string;
  iconBg: string;
  icon: React.ReactNode;
  bgColor: string;
};

export default function FinancialCard({ title, amount, icon, iconBg, bgColor }: Props) {
  return (
    <div className={`rounded-2xl p-5 shadow-card ${bgColor}`}>
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
      </div>
      <p className="text-2xl font-semibold mt-4">{amount}</p>
    </div>
  );
}

