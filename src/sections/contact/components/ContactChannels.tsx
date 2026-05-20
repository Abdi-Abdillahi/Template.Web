import {
  contactChannels,
  ChevronRight,
} from "./contact.data";

export const ContactChannels = () => {
  return (
    <div className="flex flex-col gap-4">
      {contactChannels.map((channel) => {
        const Icon = channel.icon;

        return (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              px-5
              py-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              ${channel.bg}
              ${channel.border}
              ${channel.hoverBorder}
            `}
          >
            {/* Icon */}

            <div
              className={`
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                transition-all
                duration-300
                group-hover:scale-110
                ${channel.iconBg}
                ${channel.iconColor}
              `}
            >
              <Icon className="h-5 w-5" />
            </div>

            {/* Content */}

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zinc-400">
                {channel.label}
              </p>

              <p className="truncate text-sm font-semibold text-zinc-800">
                {channel.value}
              </p>

              <p className="text-xs text-zinc-400">
                {channel.sub}
              </p>
            </div>

            <ChevronRight className="h-4 w-4 text-zinc-300 transition-colors duration-200 group-hover:text-zinc-500" />
          </a>
        );
      })}

      {/* Ethiopia Note */}

      <div className="mt-2 flex items-center gap-3 px-1">
        <span className="text-2xl">🇪🇹</span>

        <p className="text-sm text-zinc-400">
          Proudly serving Ethiopia — Addis Ababa
          and beyond.
        </p>
      </div>
    </div>
  );
};