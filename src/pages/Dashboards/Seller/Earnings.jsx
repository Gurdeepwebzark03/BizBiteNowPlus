import { motion } from "framer-motion";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import Badge from "../../components/ui/Badge";
import { IndianRupee, ShoppingBag, Clock3, CircleDot } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Lock } from "lucide-react";
import { useState } from "react";
import ProFeatureModal from "../../components/UI/ProFeatureModal";
const Earnings = () => {
  const todayEarnings = 1280;
  const todayOrders = 8;
  const pendingOrders = 2;
  const [showProModal, setShowProModal] = useState(false);

  const earningsData = [
    { month: "Jan", earnings: 12000 },
    { month: "Feb", earnings: 18000 },
    { month: "Mar", earnings: 15000 },
    { month: "Apr", earnings: 22000 },
    { month: "May", earnings: 26000 },
    { month: "Jun", earnings: 31000 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="relative">
        <div className="space-y-6 blur-[5px] opacity-70 pointer-events-none">
          <SectionTitle
            title="Earnings"
            subtitle="Track today's earnings and order activity."
          />

          {/* Hero Card */}
          <Card className="overflow-hidden bg-gradient-to-r from-[#1A4D2E] to-[#245C39] text-white border-0">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/20 p-3">
                    <IndianRupee size={32} />
                  </div>

                  <div>
                    <p className="text-sm text-white/80 uppercase tracking-wider">
                      Today's Earnings
                    </p>

                    <Badge color="green">Live</Badge>
                  </div>
                </div>

                <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                  ₹{todayEarnings.toLocaleString()}
                </h1>

                <p className="mt-3 text-white/80">
                  Earnings from delivered orders today.
                </p>
              </div>

              <div className="hidden sm:flex rounded-3xl bg-white/10 p-6 backdrop-blur-lg items-center justify-center">
                <IndianRupee className="h-16 w-16 lg:h-20 lg:w-20 opacity-80" />
              </div>
            </div>
          </Card>

          {/* Stats */}
          {/* Premium Earnings Section */}

          {/* Chart */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Monthly Earnings</h2>

            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#1A4D2E"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-[#1A4D2E]/10 p-3">
                  <ShoppingBag size={28} className="text-[#1A4D2E]" />
                </div>

                <span className="text-sm text-black">Today</span>
              </div>

              <h2 className="mt-6 text-5xl font-bold text-black">
                {todayOrders}
              </h2>

              <p className="mt-2 text-black">Orders received today</p>
            </Card>

            <Card className="transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-yellow-100 p-3">
                  <Clock3 size={28} className="text-yellow-600" />
                </div>

                <Badge color="yellow">Order Placed</Badge>
              </div>

              <h2 className="mt-6 text-5xl font-bold text-black">
                {pendingOrders}
              </h2>

              <div className="mt-2 flex items-center gap-2 text-black">
                <CircleDot size={14} className="text-yellow-500" />
                Awaiting delivery
              </div>
            </Card>
          </div>
        </div>

        {/* Lock Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setShowProModal(true)}
            className="rounded-2xl bg-white/95 px-8 py-5 border border-yellow-300 shadow-xl hover:scale-105 transition"
          >
            <Lock className="mx-auto mb-3 text-yellow-500" size={30} />

            <h3 className="text-lg font-bold">Unlock Earnings Dashboard</h3>

            <p className="mt-1 text-sm text-black">
              Earnings analytics, reports, charts and statistics are available
              with Pro & Plus Membership.
            </p>
          </button>
        </div>
      </div>
      <ProFeatureModal
        open={showProModal}
        onClose={() => setShowProModal(false)}
        onUpgrade={() => setShowProModal(false)}
      />
    </motion.div>
  );
};

export default Earnings;
