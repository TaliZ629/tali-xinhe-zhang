const stats = [
  { num: "$82M", label: "POs Audited (2023)" },
  { num: "$216K", label: "Savings Delivered" },
  { num: "100K+", label: "Top Post Views" },
  { num: "10+", label: "Corporate Events" },
];

const StatsBand = () => (
  <div className="bg-deep px-[10%] py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
    {stats.map(({ num, label }) => (
      <div key={label} className="text-center px-4 md:border-r md:border-r-[rgba(255,255,255,0.1)] last:border-r-0">
        <span className="block text-[2.5rem] font-light text-blush leading-none mb-1.5">{num}</span>
        <span className="text-[0.72rem] tracking-[0.12em] uppercase text-[rgba(255,255,255,0.5)]">{label}</span>
      </div>
    ))}
  </div>
);

export default StatsBand;
