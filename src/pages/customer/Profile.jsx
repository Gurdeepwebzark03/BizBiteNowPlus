import { useState } from "react";

import SectionHeader from "../../components/customer/common/SectionHeader";

import ProfileCard from "../../components/customer/profile/ProfileCard";
import AddressCard from "../../components/customer/profile/AddressCard";
import PaymentMethods from "../../components/customer/profile/PaymentMethods";
import SettingsCard from "../../components/customer/profile/SettingsCard";
import NotificationSettings from "../../components/customer/profile/NotificationSettings";

import {
  profileData,
  addresses,
  paymentMethods,
  notificationSettings,
  appSettings,
} from "../../data/customer/profileData";


const Profile = () => {

  const [user, setUser] =
    useState(profileData);


  const [savedAddresses, setSavedAddresses] =
    useState(addresses);


  const [payments, setPayments] =
    useState(paymentMethods);


  const [notifications, setNotifications] =
    useState(
      notificationSettings
    );


  const [settings, setSettings] =
    useState(appSettings);



  const handleAvatarChange = (event) => {

    const file =
      event.target.files?.[0];

    if (!file) return;


    const imageUrl =
      URL.createObjectURL(file);


    setUser((prev) => ({
      ...prev,
      avatar: imageUrl,
    }));

  };
    return (
    <div className="space-y-8 lg:pl-10 pb-32">

      {/* Header */}

      <SectionHeader
        title="My Profile"
        subtitle="Manage your account details and preferences"
      />


      {/* Profile */}

      <section>

        <ProfileCard
          user={user}
          onEdit={() =>
            console.log(
              "Edit Profile"
            )
          }
          onAvatarChange={
            handleAvatarChange
          }
        />

      </section>


      {/* Addresses */}

      <section>

        <AddressCard
          addresses={
            savedAddresses
          }
          onAdd={() =>
            console.log(
              "Add Address"
            )
          }
          onEdit={(address) =>
            console.log(
              "Edit Address",
              address
            )
          }
          onDelete={(address) =>
            setSavedAddresses(
              (prev) =>
                prev.filter(
                  (item) =>
                    item.id !==
                    address.id
                )
            )
          }
          onSelect={(address) =>
            setSavedAddresses(
              (prev) =>
                prev.map(
                  (item) => ({
                    ...item,
                    default:
                      item.id ===
                      address.id,
                  })
                )
            )
          }
        />

      </section>


      {/* Payments */}

      <section>

        <PaymentMethods
          methods={
            payments
          }
          onAdd={() =>
            console.log(
              "Add Payment"
            )
          }
          onEdit={(method) =>
            console.log(
              "Edit Payment",
              method
            )
          }
          onDelete={(method) =>
            setPayments(
              (prev) =>
                prev.filter(
                  (item) =>
                    item.id !==
                    method.id
                )
            )
          }
          onSelect={(method) =>
            setPayments(
              (prev) =>
                prev.map(
                  (item) => ({
                    ...item,
                    default:
                      item.id ===
                      method.id,
                  })
                )
            )
          }
        />

      </section>
            {/* Settings */}

      <section>

        <SettingsCard
          settings={settings}
          onChange={(key, value) =>
            setSettings((prev) => ({
              ...prev,
              [key]: value,
            }))
          }
        />

      </section>


      {/* Notifications */}

      <section>

        <NotificationSettings
          settings={
            notifications
          }
          onToggle={(key, value) =>
            setNotifications(
              (prev) => ({
                ...prev,
                [key]: value,
              })
            )
          }
        />

      </section>


    </div>
  );
};


export default Profile;