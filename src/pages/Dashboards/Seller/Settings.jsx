import PageHeader from "../../../components/dashboard/PageHeader";
import StoreProfileCard from "../../../components/dashboard/settings/StoreProfileCard";
import BusinessInformationCard from "../../../components/dashboard/settings/BusinessInformationCard";
import ContactInformationCard from "../../../components/dashboard/settings/ContactInformationCard";
import BusinessHoursCard from "../../../components/dashboard/settings/BusinessHoursCard";
import DeliverySettingsCard from "../../../components/dashboard/settings/DeliverySettingsCard";
import PaymentSettingsCard from "../../../components/dashboard/settings/PaymentSettingsCard";
import TaxComplianceCard from "../../../components/dashboard/settings/TaxComplianceCard";
import NotificationsCard from "../../../components/dashboard/settings/NotificationsCard";
import SecurityCard from "../../../components/dashboard/settings/SecurityCard";
import LoyaltySettingsCard from "../../../components/dashboard/settings/LoyaltySettingsCard";
import { motion } from "framer-motion";

export default function Settings() {
  return (
        <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
          <div className="space-y-8">
      <PageHeader
        title="Store Settings"
        subtitle="Manage every aspect of your restaurant from one place."
      />

      <StoreProfileCard />

      <BusinessInformationCard />

      <ContactInformationCard />

      <BusinessHoursCard />

      <DeliverySettingsCard />

      <LoyaltySettingsCard/>

      <PaymentSettingsCard />

      <TaxComplianceCard />

      <NotificationsCard />

      <SecurityCard />
    </div>
    </motion.div>
  );
}