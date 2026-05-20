import { type ShipmentData } from "./tracking.types";

export const MOCK_SHIPMENTS: Record<
  string,
  ShipmentData
> = {
  "GRD-2026-010": {
    code: "GRD-2026-010",
    status: "in_transit",
    origin: "Addis Ababa",
    destination: "Dire Dawa",
    cargo: "Cement Bags",
    weight: "18,500 kg",
    driver: "Tesfaye Alemu",
    driverPhone: "+251 91 234 5678",
    truckPlate: "AA-3-45672",
    estimatedArrival: "May 20, 2026",
    postedDate: "May 17, 2026",

    events: [
      {
        label: "Load Posted",
        time: "May 17 · 09:14 AM",
        done: true,
      },

      {
        label: "Driver Assigned",
        time: "May 17 · 10:02 AM",
        done: true,
      },

      {
        label: "Picked Up",
        time: "May 17 · 02:45 PM",
        done: true,
      },

      {
        label: "In Transit",
        time: "May 18 · 08:30 AM",
        done: true,
      },

      {
        label: "Delivered",
        time: "Est. May 20",
        done: false,
      },
    ],
  },

  "GRD-2026-007": {
    code: "GRD-2026-007",
    status: "delivered",
    origin: "Hawassa",
    destination: "Addis Ababa",
    cargo: "Agricultural Produce",
    weight: "12,200 kg",
    driver: "Kebede Worku",
    driverPhone: "+251 92 876 5432",
    truckPlate: "AA-2-78901",
    estimatedArrival: "May 15, 2026",
    postedDate: "May 13, 2026",

    events: [
      {
        label: "Load Posted",
        time: "May 13 · 07:00 AM",
        done: true,
      },

      {
        label: "Driver Assigned",
        time: "May 13 · 08:15 AM",
        done: true,
      },

      {
        label: "Picked Up",
        time: "May 13 · 01:00 PM",
        done: true,
      },

      {
        label: "In Transit",
        time: "May 14 · 06:00 AM",
        done: true,
      },

      {
        label: "Delivered",
        time: "May 15 · 11:30 AM",
        done: true,
      },
    ],
  },

  "GRD-2026-003": {
    code: "GRD-2026-003",
    status: "pickup",
    origin: "Mekelle",
    destination: "Addis Ababa",
    cargo: "Industrial Equipment",
    weight: "9,000 kg",
    driver: "Hailu Tadesse",
    driverPhone: "+251 93 111 2233",
    truckPlate: "AA-1-56789",
    estimatedArrival: "May 22, 2026",
    postedDate: "May 18, 2026",

    events: [
      {
        label: "Load Posted",
        time: "May 18 · 10:00 AM",
        done: true,
      },

      {
        label: "Driver Assigned",
        time: "May 18 · 11:45 AM",
        done: true,
      },

      {
        label: "Picked Up",
        time: "May 18 · 04:00 PM",
        done: false,
      },

      {
        label: "In Transit",
        time: "Est. May 19",
        done: false,
      },

      {
        label: "Delivered",
        time: "Est. May 22",
        done: false,
      },
    ],
  },
};