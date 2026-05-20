import { useState } from "react";

import { Send } from "lucide-react";

/* import {
  roleOptions,
} from "./contact.data"; */

import { type FormState } from "./contact.types";

const initialState: FormState = {
  name: "",
  contact: "",
  role: "Shipper",
  subject: "",
  message: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setSent(true);
    }, 1400);
  };

  // fix build error by using sent state
  if (sent) {
    return (
      <div className="text-center py-10">
        <h3 className="text-2xl font-semibold">Message Sent Successfully</h3>

        <p className="text-muted-foreground mt-2">
          Thank you for reaching out. We'll get back to you soon.
        </p>
      </div>
    );
  }
  return (
    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 md:p-9">
      <h3 className="mb-6 text-xl font-bold text-zinc-800">
        Send us a message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name + Contact */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. Haile Tesfaye"
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-sm
                outline-none
                transition-all
                focus:border-green-400
                focus:ring-2
                focus:ring-green-100
              "
            />
          </div>

          {/* Contact */}

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Phone / Email
            </label>

            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              placeholder="+251 9… or email"
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-sm
                outline-none
                transition-all
                focus:border-green-400
                focus:ring-2
                focus:ring-green-100
              "
            />
          </div>
        </div>

        {/* Roles */}

        {/*     <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
            I am a...
          </label>

          <div className="flex flex-wrap gap-2">
            {roleOptions.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    role,
                  }))
                }
                className={`
                  rounded-xl
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    form.role === role
                      ? "border-green-600 bg-green-600 text-white shadow-sm shadow-green-200"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-green-300 hover:text-green-700"
                  }
                `}
              >
                {role}
              </button>
            ))}
          </div>
        </div> */}

        {/* Subject */}

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
            className="
              w-full
              rounded-xl
              border
              border-zinc-200
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition-all
              focus:border-green-400
              focus:ring-2
              focus:ring-green-100
            "
          />
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Message
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-zinc-200
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition-all
              focus:border-green-400
              focus:ring-2
              focus:ring-green-100
            "
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-green-700
            py-4
            text-sm
            font-semibold
            text-white
            shadow-md
            shadow-green-200
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-green-800
            hover:shadow-lg
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};
