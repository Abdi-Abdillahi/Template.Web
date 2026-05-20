export const AboutHero = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-800 mb-4">
        ABOUT Company
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Smart Digital{" "}
            <span className="text-green-700">Freight Network</span>
          </h2>
        </div>

        <div>
          <p className="text-zinc-600 leading-8">
           Company Name was created to simplify modern freight operations with a transparent
            digital platform connecting carriers and businesses.
          </p>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Our mission is simple:
            <span className="font-semibold text-green-700">
              {" "}
              Smarter Freight. Faster Delivery.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
