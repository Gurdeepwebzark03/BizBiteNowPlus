import { motion } from "framer-motion";
import { History } from "lucide-react";

import ActivityTimelineItem from "./ActivityTimelineItem";

import SectionHeader from "../common/SectionHeader";
import EmptyState from "../common/EmptyState";

const ActivityTimeline = ({
  activities = [],
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <SectionHeader
        title="Activity"
        subtitle="Track every stamp and reward you've earned."
      />

      {activities.length === 0 ? (
        <EmptyState
          icon="history"
          title="No Activity Yet"
          description="Your loyalty activity will appear here."
        />
      ) : (
        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-[23px]
              top-6
              bottom-6
              w-[2px]
              bg-slate-200
            "
          />

          <div className="space-y-6">
            {activities.map((activity) => (
              <ActivityTimelineItem
                key={activity.id}
                activity={activity}
              />
            ))}
          </div>

        </div>
      )}
    </motion.section>
  );
};

export default ActivityTimeline;