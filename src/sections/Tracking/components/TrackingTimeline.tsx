import { CheckCircle2 } from "lucide-react";

import { type ShipmentEvent } from "./tracking.types";

type Props = {
  events: ShipmentEvent[];
};

export const TrackingTimeline = ({
  events,
}: Props) => {
  return (
    <ol className="relative border-l-2 border-zinc-200 pl-5">
      {events.map((event, index) => (
        <li
          key={index}
          className="relative mb-6"
        >
          <span
            className={`
              absolute
              -left-5.5
              flex
              h-4
              w-4
              items-center
              justify-center
              rounded-full
              border-2
              ${
                event.done
                  ? "border-green-500 bg-green-500"
                  : "border-zinc-300 bg-white"
              }
            `}
          >
            {event.done && (
              <CheckCircle2 className="h-2.5 w-2.5 text-white" />
            )}
          </span>

          <p
            className={`text-sm font-semibold ${
              event.done
                ? "text-zinc-800"
                : "text-zinc-400"
            }`}
          >
            {event.label}
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            {event.time}
          </p>
        </li>
      ))}
    </ol>
  );
};