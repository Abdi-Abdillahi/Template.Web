import { values } from "./about.data";

export const AboutValues = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
      {values.map((value) => {
        const Icon = value.icon;

        return (
          <div
            key={value.title}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-green-300"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <Icon className="h-5 w-5" />
            </div>

            <h3 className="mb-2 font-bold">{value.title}</h3>

            <p className="text-sm leading-6 text-zinc-500">
              {value.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
