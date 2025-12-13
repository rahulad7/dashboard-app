export default function MyCard() {
  return (
    <div className="bg-brand-dark text-white rounded-2xl p-6 shadow-card flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-lg font-medium">My Card</p>
        <button className="text-sm bg-white/10 px-3 py-1 rounded-xl">Deposit</button>
      </div>
      <div className="text-3xl font-semibold">₹ 25,000.00</div>
      <div className="text-sm text-gray-300">Balance Available</div>
      {/* Card number visual */}
      <div className="text-sm tracking-wider opacity-80">**** 3847 2958 1928</div>
    </div>
  );
}

