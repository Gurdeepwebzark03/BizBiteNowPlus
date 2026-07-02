import { Crown, Lock, X } from "lucide-react";
import Card from "./Card";
import Button from "./Button";

const ProFeatureModal = ({ open, onClose, onUpgrade }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card
        hover={false}
        className="relative w-full max-w-lg overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 hover:bg-gray-100 transition"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
          <Lock className="text-yellow-600" size={36} />
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold text-black">
          Unlock Premium Features
        </h2>

        <p className="mt-3 text-center text-black">
          Upgrade to Pro or Plus and access advanced tools to grow your business.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-3 rounded-2xl bg-gray-50 p-5">

          <Feature text="Dashboard Analytics & Insights" />

          <Feature text="Revenue, Orders, Customers & Products Overview" />

          <Feature text="Recent Orders & Quick Actions" />

          <Feature text="Top Selling Products & Inventory Analytics" />

          <Feature text="Earnings Dashboard & Interactive Charts" />

          <Feature text="Unlimited Theme Colors & Premium Fonts" />

          <Feature text="Advanced Store Branding & Future Premium Features" />

        </div>

        {/* Bottom */}
        <div className="mt-8 space-y-3">
          <Button
            onClick={onUpgrade}
            className="w-full flex items-center justify-center gap-2"
          >
            <Crown size={18} />
            Upgrade to Pro
          </Button>

          <Button
            variant="outline"
            onClick={onClose}
            className="w-full"
          >
            Maybe Later
          </Button>
        </div>
      </Card>
    </div>
  );
};

const Feature = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="h-2.5 w-2.5 rounded-full bg-[#1A4D2E]" />
    <span className="text-black">{text}</span>
  </div>
);

export default ProFeatureModal;