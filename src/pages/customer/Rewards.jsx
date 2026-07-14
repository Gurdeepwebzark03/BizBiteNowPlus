import { useState, useEffect } from "react";

import SectionHeader from "../../components/customer/common/SectionHeader";
import { motion } from "framer-motion";
import LoyaltyCard from "../../components/customer/rewards/LoyaltyCard";
import RewardProgress from "../../components/customer/rewards/RewardProgress";
import Coupons from "../../components/customer/rewards/Coupons";
import { offersToCoupons } from "../../components/customer/rewards/offerMapper";
import { getCustomerLoyaltyStatus } from "../../api/loyalty";
import { getActiveOffers } from "../../api/offers";
import {
  loyaltyData as DEMO_LOYALTY_DATA,
} from "../../data/customer/rewardsData";
import { DEMO_ACTIVE_OFFERS } from "../../data/demoActiveOffers";

import couponsData from "../../data/customer/couponsData";

// TODO: pull from auth/session context once available.
const CURRENT_CUSTOMER_ID = "me";

const Rewards = () => {

  const [loyalty, setLoyalty] = useState(DEMO_LOYALTY_DATA);

  const [coupons, setCoupons] =
    useState(couponsData);


const [appliedCoupon, setAppliedCoupon] = useState(null);
const [usedCoupons, setUsedCoupons] = useState([]);


useEffect(() => {
  getCustomerLoyaltyStatus(CURRENT_CUSTOMER_ID)
    .then(setLoyalty)
    .catch(() => {
      // Per orientation §14: mock data while /api/loyalty isn't live.
      setLoyalty(DEMO_LOYALTY_DATA);
    });
}, []);

useEffect(() => {
  getActiveOffers()
    .then((offers) => setCoupons(offersToCoupons(offers)))
    .catch(() => {
      // Per orientation §14: mock data while /api/offers/active isn't live.
      setCoupons(offersToCoupons(DEMO_ACTIVE_OFFERS));
      // Swap the line above for `setCoupons(couponsData)` instead if you'd
      // rather fall back to the hand-written demo coupons than mapped
      // seller-offer mock data — both are valid fallbacks, pick one.
    });
}, []);


const applyCoupon = (coupon) => {
  if (usedCoupons.includes(coupon.code)) return;

  setAppliedCoupon(coupon);
  localStorage.setItem(
    "appliedCoupon",
    JSON.stringify(coupon)
  );
};

const handleCopy = () => {
  // Coupons.jsx already copies to clipboard itself and calls this back —
  // hook in analytics here if needed. No-op otherwise.
};


    return (
                     <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="space-y-6"
>
    <div className="space-y-8 lg:pl-10 pb-32">

      {/* Header */}

      <SectionHeader
        title="Rewards & Loyalty"
        subtitle="Earn stamps, unlock rewards and save more"
      />


      {/* Loyalty */}

      <section className="space-y-5">

        <LoyaltyCard
          data={loyalty}
        />


        <RewardProgress
          data={loyalty}
        />

      </section>


      {/* Coupons */}

      <section className="space-y-5">


<Coupons
  coupons={coupons}
  appliedCoupon={appliedCoupon}
  usedCoupons={usedCoupons}
  onApply={applyCoupon}
  onCopy={handleCopy}
/>

      </section>


      
      

    </div>
    </motion.div>
  );
};


export default Rewards;