import { useState } from "react";

import {
  Search,
  Package,
  AlertCircle,
} from "lucide-react";

import { MOCK_SHIPMENTS } from "./tracking.data";
import { type ShipmentData } from "./tracking.types";
import { TrackingResult } from "./TrackingResult";

export const TrackingForm = () => {
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<ShipmentData | null>(null);

  const [error, setError] = useState("");

  const handleTrack = () => {
    const code = input.trim().toUpperCase();

    if (!code) return;

    setLoading(true);

    setError("");

    setResult(null);

    setTimeout(() => {
      const data = MOCK_SHIPMENTS[code];

      if (data) {
        setResult(data);
      } else {
        setError(
          `No shipment found for "${code}".`
        );
      }

      setLoading(false);
    }, 900);
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Card */}

      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        {/* Label */}

        <label className="mb-2 block text-sm font-semibold text-zinc-700">
          Tracking Code
        </label>

        {/* Input Row */}

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Input */}

          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);

                setError("");
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && handleTrack()
              }
              placeholder="e.g. GRD-2026-010"
              className="
                w-full
                rounded-2xl
                border
                border-zinc-200
                py-3.5
                pl-10
                pr-4
                text-sm
                font-medium
                outline-none
                transition-all
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
            />
          </div>

          {/* Button */}

          <button
            onClick={handleTrack}
            disabled={loading || !input.trim()}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-green-700
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              transition-all
              hover:bg-green-900
              disabled:bg-zinc-200
              disabled:text-zinc-400
            "
          >
            {loading ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            ) : (
              <Package className="h-4 w-4" />
            )}

            {loading ? "Tracking..." : "Track"}
          </button>
        </div>

        {/* Sample Codes */}

        <p className="mt-3 text-xs text-zinc-400">
          Sample code:{" "}

          {[
            "GRD-2026-010",
          ].map((code, index) => (
            <span key={code}>
              <button
                className="font-semibold text-green-700 hover:underline"
                onClick={() => {
                  setInput(code);

                  setError("");

                  setResult(null);
                }}
              >
                {code}
              </button>

              {index < 2 ? ", " : ""}
            </span>
          ))}
        </p>

        {/* Error */}

        {error && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />

            <p className="text-sm text-red-600">
              {error}
            </p>
          </div>
        )}
      </div>

      {/* Result */}

      {result && (
        <TrackingResult
          key={result.code}
          data={result}
        />
      )}
    </div>
  );
};