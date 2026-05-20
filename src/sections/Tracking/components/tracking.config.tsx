import {
  Truck,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { type ShipmentStatus } from "./tracking.types";
export const STATUS_CONFIG: Record<
  ShipmentStatus,
  {
    label: string;
    color: string;
    bg: string;
    icon: React.ReactNode;
  }
> = {
  in_transit: {
    label: "In Transit",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
    icon: <Truck className="h-4 w-4" />,
  },

  delivered: {
    label: "Delivered",
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },

  pickup: {
    label: "Awaiting Pickup",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
    icon: <Clock className="h-4 w-4" />,
  },
};