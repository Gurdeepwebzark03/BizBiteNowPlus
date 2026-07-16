import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  RotateCcw,
  Truck,
  Gift,
  Users,
  Copyright,
  ChevronRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const policies = [
  {
    id: "terms",
    icon: FileText,
    title: "Terms of Service",
    desc: "Read the terms and conditions for using BizBiteNow.",
    lastUpdated: "20 May 2024",
    intro:
      "Welcome to BizBiteNow. By accessing or using our app, website or services, you agree to be bound by the following terms and conditions.",
    sections: [
      {
        title: "Use of Services",
        desc: "You agree to use BizBiteNow only for lawful purposes and in accordance with these Terms.",
      },
      {
        title: "User Accounts",
        desc: "You are responsible for maintaining the confidentiality of your account and for all activities under your account.",
      },
      {
        title: "Orders & Payments",
        desc: "All orders are subject to availability. Prices are inclusive of applicable taxes. We accept Cash on Delivery only.",
      },
      {
        title: "Cancellations",
        desc: "You can cancel your order before it is confirmed by the restaurant. Once confirmed, cancellations are not allowed.",
      },
      {
        title: "Limitation of Liability",
        desc: "BizBiteNow shall not be liable for any indirect, incidental or consequential damages arising from the use of our services.",
      },
    ],
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "Privacy Policy",
    desc: "Learn how we collect, use, and protect your personal information.",
    lastUpdated: "20 May 2024",
    intro:
      "This Privacy Policy explains how BizBiteNow collects, uses, and safeguards your personal information when you use our app and services.",
    sections: [
      {
        title: "Information We Collect",
        desc: "We collect your name, phone number, delivery address, and order history to provide our services.",
      },
      {
        title: "How We Use Your Data",
        desc: "Your information is used to process orders, improve our services, and send order-related notifications.",
      },
      {
        title: "Data Sharing",
        desc: "We do not sell your personal data. Information is shared only with delivery partners as required to fulfil your order.",
      },
      {
        title: "Your Rights",
        desc: "You can request access to, correction of, or deletion of your personal data at any time from your profile.",
      },
    ],
  },
  {
    id: "refund",
    icon: RotateCcw,
    title: "Refund & Cancellation Policy",
    desc: "Understand our refund process and cancellation terms.",
    lastUpdated: "20 May 2024",
    intro:
      "This policy outlines when and how refunds are processed, and the conditions under which an order may be cancelled.",
    sections: [
      {
        title: "Eligibility for Refund",
        desc: "Refunds are applicable only for orders that were not delivered, delivered incorrectly, or cancelled before confirmation.",
      },
      {
        title: "Refund Timeline",
        desc: "Approved refunds are processed within 3-5 business days back to the original payment method.",
      },
      {
        title: "Non-Refundable Cases",
        desc: "Orders that have already been prepared or dispatched are not eligible for a refund.",
      },
    ],
  },
  {
    id: "shipping",
    icon: Truck,
    title: "Shipping & Delivery Policy",
    desc: "Know more about our delivery process, timings, and charges.",
    lastUpdated: "20 May 2024",
    intro:
      "This policy explains our delivery process, estimated timings, and applicable delivery charges.",
    sections: [
      {
        title: "Delivery Areas",
        desc: "We currently deliver within a limited radius of the restaurant location. Availability is shown at checkout.",
      },
      {
        title: "Delivery Time",
        desc: "Estimated delivery time is 25-35 minutes depending on order volume and distance.",
      },
      {
        title: "Delivery Charges",
        desc: "A delivery fee applies to orders below the free-delivery threshold shown at checkout.",
      },
    ],
  },
  {
    id: "loyalty",
    icon: Gift,
    title: "Terms for Loyalty Program",
    desc: "Read the terms and conditions for our stamp loyalty program.",
    lastUpdated: "20 May 2024",
    intro:
      "These terms govern your participation in the BizBiteNow rewards and loyalty program.",
    sections: [
      {
        title: "Earning Points",
        desc: "Points are earned on every successful order and credited to your account automatically.",
      },
      {
        title: "Redeeming Rewards",
        desc: "Points can be redeemed for coupons and offers shown on your Rewards page.",
      },
      {
        title: "Expiry",
        desc: "Loyalty points expire 12 months after they are earned if not redeemed.",
      },
    ],
  },
  {
    id: "conduct",
    icon: Users,
    title: "Content & User Conduct",
    desc: "Guidelines for user behaviour and content on our platform.",
    lastUpdated: "20 May 2024",
    intro:
      "These guidelines describe acceptable behaviour and content when using BizBiteNow's reviews, ratings, and support channels.",
    sections: [
      {
        title: "Respectful Communication",
        desc: "Abusive, threatening, or discriminatory language towards staff or delivery partners is not tolerated.",
      },
      {
        title: "Genuine Reviews",
        desc: "Reviews and ratings must reflect a genuine experience with the restaurant or order.",
      },
    ],
  },
  {
    id: "ip",
    icon: Copyright,
    title: "Intellectual Property",
    desc: "Learn about the ownership of our content and trademarks.",
    lastUpdated: "20 May 2024",
    intro:
      "All content, logos, and trademarks on BizBiteNow are the property of BizBiteNow and its licensors.",
    sections: [
      {
        title: "Ownership",
        desc: "The BizBiteNow name, logo, and app design are protected trademarks and may not be used without permission.",
      },
      {
        title: "Restricted Use",
        desc: "You may not copy, modify, or distribute any part of our app or content without prior written consent.",
      },
    ],
  },
];

const TermsPolicy = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(policies[0].id);

  const active = policies.find((p) => p.id === activeId) || policies[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 py-5 pb-28">
      <div className="w-full min-w-0 max-w-[1760px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/customer/profile")}
            className="flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer shrink-0"
            style={{ width: "40px", height: "40px" }}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Terms & Policies
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Read our policies and terms to understand how BizBiteNow works.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-5 items-start">
          {/* Left — policy list */}
          <div className="bg-white dark:bg-[#181A1B] rounded-2xl shadow-sm overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wide">
              Our Policies
            </p>
            {policies.map((policy, i) => {
              const Icon = policy.icon;
              const isActive = policy.id === activeId;
              return (
                <button
                  key={policy.id}
                  onClick={() => setActiveId(policy.id)}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors cursor-pointer ${
                    isActive
                      ? "bg-var(--primary-light)"
                      : "hover:bg-gray-50 dark:hover:bg-white/5"
                  } ${i < policies.length - 1 ? "border-b border-gray-100 dark:border-[#A9BDCF]/20" : ""}`}>
                  <Icon
                    size={19}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--primary)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-white text-[14px]">
                      {policy.title}
                    </p>
                    <p className="text-gray-400 dark:text-slate-500 mt-0.5 text-[12px] leading-4">
                      {policy.desc}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-gray-300 dark:text-slate-600 shrink-0 mt-1"
                  />
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="bg-white dark:bg-[#181A1B] rounded-2xl shadow-sm p-5">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {active.title}
                </h2>
                <p className="mt-1 text-xs text-gray-400 dark:text-slate-500">
                  Last updated: {active.lastUpdated}
                </p>
              </div>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--primary-light)" }}>
                <FileText size={20} style={{ color: "var(--primary)" }} />
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-6 mb-5">
              {active.intro}
            </p>

            <div className="space-y-4 mb-5">
              {active.sections.map((section, i) => (
                <div key={section.title} className="flex gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                    style={{ backgroundColor: "var(--primary)" }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-[14px]">
                      {section.title}
                    </p>
                    <p className="text-slate-500 dark:text-white text-[13px] leading-5 mt-0.5">
                      {section.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-4 flex items-center justify-between gap-4 flex-wrap"
              style={{
                backgroundColor: "var(--primary-light)",
                border: "1px solid var(--primary-border)",
              }}>
              <p className="text-sm font-medium text-[var(--primary)] dark:text-white">
                By using BizBiteNow, you agree to these {active.title}.
              </p>
              <button
                className="flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shrink-0 cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}>
                <Check size={15} />I Agree
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-5 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap"
          style={{
            backgroundColor: "var(--primary-light)",
            border: "1px solid var(--primary-border)",
          }}>
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-[15px]">
              Have questions?
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[13px] mt-0.5">
              If you have any questions about our policies, feel free to reach
              out to us.
            </p>
          </div>
          <button
            onClick={() => navigate("/customer/profile/help-support")}
            className="rounded-xl px-5 py-2.5 text-sm font-semibold shrink-0 cursor-pointer text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}>
            Contact Support
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsPolicy;
