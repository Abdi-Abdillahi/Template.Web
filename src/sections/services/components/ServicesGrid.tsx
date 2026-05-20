import { services } from "./services.data";

export const ServicesGrid = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className="
              rounded-2xl
              border
              border-zinc-200
              bg-zinc-50
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-green-300
            "
          >
            {/* Icon */}
            <div
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-green-100
                text-green-700
                transition-all
                duration-300
                group-hover:bg-green-600
                group-hover:text-white
              "
            >
              <Icon className="h-6 w-6" />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-bold">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-7 text-zinc-500">
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};