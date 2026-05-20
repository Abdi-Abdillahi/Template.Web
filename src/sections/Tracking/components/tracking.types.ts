export type ShipmentStatus =
  | "in_transit"
  | "delivered"
  | "pickup";

export type ShipmentEvent = {
  label: string;
  time: string;
  done: boolean;
};

export type ShipmentData = {
  code: string;
  status: ShipmentStatus;
  origin: string;
  destination: string;
  cargo: string;
  weight: string;
  driver: string;
  driverPhone: string;
  truckPlate: string;
  estimatedArrival: string;
  postedDate: string;
  events: ShipmentEvent[];
};