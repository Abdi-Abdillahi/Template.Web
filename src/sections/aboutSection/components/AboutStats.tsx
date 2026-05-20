import { stats } from "./about.data";

export const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center transition hover:-translate-y-1 hover:border-green-300"
        >
          <h3 className="mb-2 text-3xl font-bold text-green-700">
            {stat.value}
          </h3>

          <p className="text-sm text-zinc-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};