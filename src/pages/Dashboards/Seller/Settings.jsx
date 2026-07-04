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

export default function Settings() {
  return (
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
  );
}