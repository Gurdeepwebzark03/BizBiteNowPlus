import { Settings as SettingsIcon, ShieldCheck } from "lucide-react";

import Card from "../../components/UI/Card";
import SectionTitle from "../../components/UI/SectionTitle";
import { motion } from "framer-motion";
import StoreInformation from "../../components/settings/StoreInformation";
import StoreStatus from "../../components/settings/StoreStatus";
import Branding from "../../components/settings/Branding";
import Security from "../../components/settings/Security";

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="space-y-8">
        {/* Hero Banner */}

        <Card
          hover={false}
          className="relative overflow-hidden bg-gradient-to-r from-[#1A4D2E] via-[#205C38] to-[#2D6A4F] text-white border-none"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SettingsIcon size={34} />

                <h1 className="text-4xl font-bold">Store Settings</h1>
              </div>

              <p className="text-green-100 max-w-2xl leading-7">
                Manage your store information, branding, business status and
                account security from one place.
              </p>
            </div>

            <div className="flex items-center">
              <div className="rounded-2xl border border-white/20 bg-white/15 backdrop-blur-lg p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-300" />

                  <div>
                    <p className="text-sm text-green-100">Account Status</p>

                    <h3 className="text-xl font-bold">Verified</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <SectionTitle
          title="Settings"
          subtitle="Manage your store information and account preferences."
        />

        <div className="grid xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <StoreInformation />
          </div>

          <StoreStatus />
        </div>

        <Branding />

        <Security />
      </div>
    </motion.div>
  );
};

export default Settings;
