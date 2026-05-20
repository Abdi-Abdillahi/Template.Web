export const TrackingHeader = () => {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-green-700">
        Shipment Tracking
      </div>

      <h2 className="text-4xl font-extrabold md:text-5xl">
        Track your shipment
        <span className="text-green-700">
          {" "}
          in real time
        </span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-500">
        Enter your tracking code to view shipment
        progress, delivery timeline, and transport
        details.
      </p>
    </div>
  );
};