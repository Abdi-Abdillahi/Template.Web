import {
  Calendar,
  MapPin,
  Shield,
  Truck,
  Weight,
  Box,
} from "lucide-react";

import { STATUS_CONFIG } from "./tracking.config";
import { type ShipmentData } from "./tracking.types";
import { TrackingTimeline } from "./TrackingTimeline";
type Props = {
  data: ShipmentData;
};

export const TrackingResult = ({
  data,
}: Props) => {
  const status = STATUS_CONFIG[data.status];

  const progress = Math.round(
    (data.events.filter((e) => e.done).length /
      data.events.length) *
      100
  );

  const details = [
    {
      icon: <Box className="h-4 w-4" />,
      label: "Cargo",
      value: data.cargo,
    },

    {
      icon: <Weight className="h-4 w-4" />,
      label: "Weight",
      value: data.weight,
    },

    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Posted",
      value: data.postedDate,
    },

    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Arrival",
      value: data.estimatedArrival,
    },

    {
      icon: <Truck className="h-4 w-4" />,
      label: "Plate",
      value: data.truckPlate,
    },

    {
      icon: <Shield className="h-4 w-4" />,
      label: "Driver",
      value: data.driver,
    },
  ];

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm reveal show">
      {/* Header */}

      <div className="flex flex-col gap-4 bg-green-700 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white">
            Tracking ID
          </p>

          <h3 className="text-2xl font-extrabold text-white">
            {data.code}
          </h3>
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${status.bg} ${status.color}`}
        >
          {status.icon}
          {status.label}
        </div>
      </div>

      {/* Body */}

      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_260px]">
        {/* Left */}

        <div>
          {/* Route */}

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 font-semibold">
              {data.origin}
            </div>

            <Truck className="h-4 w-4 text-zinc-400" />

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 font-semibold">
              {data.destination}
            </div>
          </div>

          {/* Details */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
              >
                <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {detail.icon}
                  {detail.label}
                </div>

                <p className="text-sm font-semibold text-zinc-800">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          {/* Progress */}

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm font-semibold">
              <span>Shipment Progress</span>
              <span className="text-green-700">
                {progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
              <div
                style={{
                  width: `${progress}%`,
                }}
                className="h-full rounded-full bg-green-500 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}

        <div className="border-t border-zinc-100 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-400">
            Timeline
          </p>

          <TrackingTimeline events={data.events} />
        </div>
      </div>
    </div>
  );
};