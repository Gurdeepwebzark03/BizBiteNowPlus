import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PartyPopper,
  Users,
  UserRound,
  MessageSquare,
  Gift,
} from "lucide-react";

import { getOccasionTemplates, sendManualOffer } from "../../api/offers";
import {
  DEFAULT_TEMPLATES,
  fillTemplate,
} from "../../data/occasionTemplate";

const SpecialOffers = ({ shopName = "Your Shop", customerCount = 142 }) => {
  const [templates, setTemplates] = useState(DEFAULT_TEMPLATES);

  const [recipientMode, setRecipientMode] = useState("all");

  const [templateId, setTemplateId] = useState(DEFAULT_TEMPLATES[0].id);

  const [message, setMessage] = useState("");

  const [discountCode, setDiscountCode] = useState("DIWALI20");

  const [sending, setSending] = useState(false);

  const [sentCount, setSentCount] = useState(null);

  useEffect(() => {
    getOccasionTemplates()
      .then((res) => {
        if (res.length) {
          setTemplates(res);
        }
      })
      .catch(() => {
        // fallback templates
      });
  }, []);

  useEffect(() => {
    const selected = templates.find((t) => t.id === templateId) || templates[0];

    setMessage(
      fillTemplate(selected.body, {
        code: discountCode,
        shop: shopName,
      }),
    );
  }, [templateId, templates]);

  useEffect(() => {
    const selected = templates.find((t) => t.id === templateId) || templates[0];

    setMessage(
      fillTemplate(selected.body, {
        code: discountCode,
        shop: shopName,
      }),
    );
  }, [discountCode]);

  async function handleSend() {
    setSending(true);
    setSentCount(null);

    try {
      const result = await sendManualOffer({
        recipientMode,
        templateId,
        message,
        discountCode,
      });

      setSentCount(result.sentCount);
    } catch {
      setSentCount(recipientMode === "all" ? customerCount : 0);
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
        <div className="rounded-xl bg-[#16522d]/10 p-3">
          <PartyPopper size={22} className="text-[#16522d]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Special Occasion Offers
          </h2>

          <p className="text-sm text-slate-500">
            Send festive and promotional offers to your customers.
          </p>
        </div>
      </div>

      <div className="space-y-8 p-6">
        {/* Recipient */}

        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#16522d]">
            <Users size={18} />
            Send To
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setRecipientMode("all")}
              className={`flex items-center justify-between rounded-xl border p-5 transition ${
                recipientMode === "all"
                  ? "border-[#16522d] bg-[#16522d]/5"
                  : "border-slate-200 hover:border-[#16522d]/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className="text-[#16522d]" size={22} />

                <div className="text-left">
                  <h4 className="font-semibold text-[#16522d]">
                    All Customers
                  </h4>

                  <p className="text-sm text-slate-500">
                    {customerCount} customers
                  </p>
                </div>
              </div>

              <div
                className={`h-4 w-4 rounded-full border-2 ${
                  recipientMode === "all"
                    ? "border-[#16522d] bg-[#16522d]"
                    : "border-slate-300"
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => setRecipientMode("select")}
              className={`flex items-center justify-between rounded-xl border p-5 transition ${
                recipientMode === "select"
                  ? "border-[#16522d] bg-[#16522d]/5"
                  : "border-slate-200 hover:border-[#16522d]/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <UserRound className="text-[#16522d]" size={22} />

                <div className="text-left">
                  <h4 className="font-semibold text-[#16522d]">
                    Selected Customers
                  </h4>

                  <p className="text-sm text-slate-500">Choose manually</p>
                </div>
              </div>

              <div
                className={`h-4 w-4 rounded-full border-2 ${
                  recipientMode === "select"
                    ? "border-[#16522d] bg-[#16522d]"
                    : "border-slate-300"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Occasion Templates */}

        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#16522d]">
            <Gift size={18} />
            Occasion Templates
          </label>

          <div className="flex flex-wrap gap-3">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setTemplateId(template.id)}
                className={`rounded-xl border px-5 py-3 font-medium transition ${
                  templateId === template.id
                    ? "border-[#16522d] bg-[#16522d] text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-[#16522d]"
                }`}
              >
                {template.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}

        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#16522d]">
            <MessageSquare size={18} />
            Offer Message
          </label>

          <textarea
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>
        {/* Discount Code */}

        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#16522d]">
            <Gift size={18} />
            Discount Code
          </label>

          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
            placeholder="DIWALI20"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        {/* Live Preview */}

        <div>
          <label className="mb-3 text-sm font-semibold text-[#16522d]">
            Live Preview
          </label>

          <div className="rounded-2xl border border-slate-200 bg-[#f8faf8] p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-[#16522d]/10 p-3">
                <PartyPopper size={22} className="text-[#16522d]" />
              </div>

              <div>
                <h3 className="font-semibold text-[#16522d]">
                  Customer Message
                </h3>

                <p className="text-sm text-slate-500">
                  This is exactly what customers will receive.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-[#16522d]/20 bg-white p-5">
              <p className="whitespace-pre-line leading-7 text-slate-700">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-slate-200 px-6 py-5">
        <div>
          {sentCount !== null && (
            <p className="text-sm font-medium text-green-600">
              ✅ Offer sent successfully to{" "}
              <span className="font-semibold">{sentCount}</span> customer
              {sentCount !== 1 ? "s" : ""}.
            </p>
          )}
        </div>

        <button
          onClick={handleSend}
          disabled={sending}
          className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <PartyPopper size={18} />

          {sending ? "Sending..." : "Send Offer"}
        </button>
      </div>
    </motion.section>
  );
};

export default SpecialOffers;
