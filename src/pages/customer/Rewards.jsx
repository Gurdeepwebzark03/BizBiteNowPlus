import { useState } from "react";

import SectionHeader from "../../components/customer/common/SectionHeader";

import LoyaltyCard from "../../components/customer/rewards/LoyaltyCard";
import RewardProgress from "../../components/customer/rewards/RewardProgress";
import Coupons from "../../components/customer/rewards/Coupons";
import GiftCard from "../../components/customer/rewards/GiftCard";
import AchievementCard from "../../components/customer/rewards/AchievementCard";

import {
  loyaltyData,
  rewardsData,
  achievementsData,
  giftCardsData,
} from "../../data/customer/rewardsData";

import couponsData from "../../data/customer/couponsData";


const Rewards = () => {

  const [coupons, setCoupons] =
    useState(couponsData);


  const [appliedCoupon, setAppliedCoupon] =
    useState(null);


  const [achievements, setAchievements] =
    useState(
      achievementsData
    );


  const applyCoupon = (coupon) => {

    setAppliedCoupon(
      coupon.code
    );

  };


  const claimReward = (achievement) => {

    setAchievements((prev) =>
      prev.map((item) =>
        item.id === achievement.id
          ? {
              ...item,
              claimed: true,
            }
          : item
      )
    );

  };
    return (
    <div className="space-y-8 lg:pl-10 pb-32">

      {/* Header */}

      <SectionHeader
        title="Rewards & Loyalty"
        subtitle="Earn points, unlock rewards and save more"
      />


      {/* Loyalty */}

      <section className="space-y-5">

        <LoyaltyCard
          data={loyaltyData}
        />


        <RewardProgress
          data={loyaltyData}
        />

      </section>


      {/* Coupons */}

      <section className="space-y-5">

        <Coupons
          coupons={coupons}
          appliedCoupon={appliedCoupon}
          onApply={applyCoupon}
          onCopy={(code) =>
            navigator.clipboard.writeText(
              code
            )
          }
        />

      </section>


      {/* Gift Cards */}

      <section className="space-y-5">

        <h2 className="text-xl font-bold text-slate-900">
          Gift Cards
        </h2>


        <div
          className="
            grid
            gap-5

            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {giftCardsData.map(
            (gift) => (

              <GiftCard
                key={gift.id}
                gift={gift}
              />

            )
          )}

        </div>

      </section>
            {/* Achievements */}

      <section className="space-y-5">

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Achievements
          </h2>

          <p className="mt-1 text-slate-500">
            Complete challenges and unlock exclusive rewards.
          </p>

        </div>


        <div
          className="
            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {achievements.map(
            (achievement) => (

              <AchievementCard
                key={
                  achievement.id
                }
                achievement={
                  achievement
                }
                onClaim={
                  claimReward
                }
              />

            )
          )}

        </div>

      </section>


    </div>
  );
};


export default Rewards;